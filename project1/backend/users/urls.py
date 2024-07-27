from django.urls import path
from . import views

urlpatterns = [
    path('login/',views.login),
    path('register/', views.UserCreateView.as_view()),
    path('navbar/',views.navbar),
    path('userlist/',views.userlist),
]