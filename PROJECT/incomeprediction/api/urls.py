from django.urls import path
from . import views

urlpatterns = [
    # predict view
    path('predict/', views.predict, name='predict'),
]