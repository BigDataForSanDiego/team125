import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# GET api/medicine/<product_name_id>/?location=<geolocation>
@api_view(["GET"])
def medicine(request):
    pass


# GET api/medicines/?product_name=<string>
@api_view(["GET"])
def medicines(request):
    product_name = request.query_params.get("product_name")
    if not product_name:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    response = requests.get(
        f"https://www.goodrx.com/api/v4/search/autocomplete?term={product_name}"
    )
    response_data = response.json()
    return Response(data=response_data, status=200)
