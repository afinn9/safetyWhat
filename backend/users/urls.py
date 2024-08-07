from django.urls import path
from . import views
# from .views import UserRegistrationView

urlpatterns = [
    path('login/',views.login),
    # path('register/', views.UserCreateView.as_view()),
    path('navbar/',views.navbar),
    path('userlist/',views.userlist),
    # path('user_email/',views.post)
    path('add_user/',views.user_registration),
    path('api_req/',views.send_api_request),
]