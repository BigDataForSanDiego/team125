from django.urls import path
from . import views

urlpatterns = [
    path("medicines/", views.medicines),
    path("medicine/<slug:slug_name>", views.medicine)
]
