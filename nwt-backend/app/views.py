import functools
import json
from typing import Callable

from django import http
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpRequest, HttpResponse
from django.views.generic import View

from . import models, settings
from .settings import RecordTypeConverter


class LoginRequired(LoginRequiredMixin):
    login_url = f'/{settings.PAGE_LOGIN}'


_Method = Callable[[View, HttpRequest], HttpResponse]
_Func = Callable[[View, HttpRequest], HttpResponse]


def login_required(f: _Method) -> _Method:
    @functools.wraps(f)
    def wrapper(self: View, request: HttpRequest) -> HttpResponse:
        if hasattr(request, 'user') and request.user.is_authenticated:
            return f(self, request)

        return HttpResponse(b'Not authenticated', status=401)

    return wrapper


def index(request):
    return HttpResponse('Hello, world. You\'re at the polls index.')


class LoginView(View):
    def post(self, request: HttpRequest) -> HttpResponse:
        creds = json.loads(request.body)
        username = creds['username']
        password = creds['password']
        print('Got ', username, password, creds)
        user = authenticate(request, username=username, password=password)
        if user is None:
            return http.HttpResponseBadRequest(b'No such user')

        login(request, user)
        return http.HttpResponseRedirect(f'/{settings.PAGE_AFTER_LOG}')


class LogoutView(View):
    @login_required
    def get(self, request: HttpRequest):
        logout(request)
        return http.HttpResponseRedirect(f'/{settings.PAGE_AFTER_LOG}')


class UserTotalView(View):
    @login_required
    def get(self, request: HttpRequest) -> HttpResponse:
        query = models.Record.objects.filter(user_id=request.user.id)
        a_sum = query.filter(type_id=settings.RECORD_TYPE_ASSET_ID)
        l_sum = query.filter(type_id=settings.RECORD_TYPE_LIABILITY_ID)
        data = {
            settings.RECORD_TYPE_ASSET_NAME    : sum(record.amount for record in a_sum),
            settings.RECORD_TYPE_LIABILITY_NAME: sum(record.amount for record in l_sum),
        }
        return http.JsonResponse(data)


class RecordsView(View):
    @login_required
    def get(self, request: HttpRequest) -> HttpResponse:
        query = models.Record.objects.filter(user_id=request.user.id)
        data = [record.to_dict(exclude={'id', 'user'}) for record in query]
        for d in data:
            d['type'] = RecordTypeConverter[d['type']]
        return http.JsonResponse(data, safe=False)

    @login_required
    def post(self, request: HttpRequest) -> HttpResponse:
        data = {**request.POST, 'user': request.user}
        typ = data['type']
        if typ not in RecordTypeConverter:
            return http.HttpResponseBadRequest(f'Record type must be {RecordTypeConverter.values()}, got {typ}')
        if isinstance(typ, str):
            data['type'] = RecordTypeConverter[typ]

        try:
            record = models.Record(**data)
        except Exception as e:
            return http.HttpResponseBadRequest(b'Invalid data')

        record.save()
        return HttpResponse()
