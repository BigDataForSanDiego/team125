from rest_framework import routers
from views import medicine, medicines

router = routers.SimpleRouter()
router.register(r'medicine/<slug:medicine>', medicine)
router.register(r'medicines/', medicines)

urlpatterns = router.urls