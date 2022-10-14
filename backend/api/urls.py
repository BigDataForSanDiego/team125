from django.urls import path
from . import views

# router.register(r'medicine/<slug:medicine>', medicine)
# router.register(r'medicines/', medicines, basename="api-medicines")

urlpatterns = [path("medicines/", views.medicines)]
