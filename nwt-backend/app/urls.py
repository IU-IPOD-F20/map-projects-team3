from django.urls import path

from . import settings, views

urlpatterns = [
    path(settings.PAGE_HOME, views.index),
    path(settings.PAGE_LOGIN, views.LoginView.as_view()),
    path(settings.PAGE_LOGOUT, views.LogoutView.as_view()),
    path('api-total/', views.UserTotalView.as_view()),
    path('api-records/', views.RecordsView.as_view()),
]
