from rest_framework.decorators import api_view

# GET api/medicine/<product_name_id>/?location=<geolocation>
@api_view(["GET"])
def medicine(request):
    pass


# GET api/medicines/?product_name=<string>
@api_view(["GET"])
def medicines(request):
    pass
