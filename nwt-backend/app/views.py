from django import http
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpRequest, HttpResponse
from django.views.generic import View

from . import models, settings


def index(request):
    return HttpResponse('Hello, world. You\'re at the polls index.')


class LoginRequired(LoginRequiredMixin):
    login_url = f'/{settings.PAGE_LOGIN}'


class LoginView(View):
    def post(self, request: HttpRequest) -> HttpResponse:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is None:
            return http.HttpResponseBadRequest(b'No such user')

        login(request, user)
        return http.HttpResponseRedirect(f'/{settings.PAGE_HOME}')


class LogoutView(View):
    def get(self, request: HttpRequest):
        if request.user.is_authenticated:
            logout(request)
            return http.HttpResponseRedirect(f'/{settings.PAGE_AFTER_LOGOUT}')

        return HttpResponse(b'Not authenticated', status=401)


class UserTotalView(LoginRequired, View):
    def get(self, request: HttpRequest):
        query = models.Record.objects.filter(user_id=request.user.id)
        a_sum = query.filter(type_id=settings.RECORD_TYPE_ASSET_ID)
        l_sum = query.filter(type_id=settings.RECORD_TYPE_LIABILITY_ID)
        data = {
            'assets'     : sum(record.amount for record in a_sum),
            'liabilities': sum(record.amount for record in l_sum),
        }
        return http.JsonResponse(data)


class RecordsView(LoginRequired, View):
    def get(self, request: HttpRequest):
        query = models.Record.objects.filter(user_id=request.user.id)
        data = [record.to_dict(exclude={'id', 'user'}) for record in query]
        return http.JsonResponse(data, safe=False)

    def post(self, request: HttpRequest):
        """
        TODO
        """
