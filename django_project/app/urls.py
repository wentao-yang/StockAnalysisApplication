from django.urls import path
from . import views

# URL paths for this application, look in views.py for more information
urlpatterns = [
    path('', views.home),
    path('api/symbol=<str:symbol>/', views.data),
    path('api/symbols/', views.symbols),
]
