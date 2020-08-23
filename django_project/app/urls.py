from django.urls import path
from . import views

# URL paths for this application
urlpatterns = [
    path('', views.home, name='app-home'),
    path('test/', views.test, name='app-test'),
]
