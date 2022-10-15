import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from .models import Medicine, Vendor, VendorMedicine
from .serializers import MedicineResponseRx, MedicineSearchSerializer, MedicineSerializer
from .browser import create_session_browser


# GET api/medicine/<slug_name>/?location=<geolocation>
@api_view(["GET"])
def medicine(request, slug_name):
    medicine = Medicine.objects.filter(slug_name=slug_name)
    if not medicine.exists():
        return Response(status=status.HTTP_400_BAD_REQUEST)
    medicine = medicine.get()

    # scrap drug descrition
    browser = create_session_browser()
    if not medicine.description:
        browser.get(f"https://www.google.com/search?q={medicine.slug_name}+drug")
        try:
            description_element = browser.find_element(By.CSS_SELECTOR, "div[data-attrid='description'] span")
            description = description_element.text
            description = description.removeprefix("Description\n").removesuffix("Wikipedia").strip()
            medicine.description = description
        except NoSuchElementException:
            pass
        
        if not medicine.description:
            try:
                description_element = browser.find_element(By.CSS_SELECTOR, "div[data-attrid='wa:/description'] span span")
                description = description_element.text
                description = description.replace("<b>", "").replace("</b>", "")
                medicine.description = description
            except NoSuchElementException:
                pass
        
        if not medicine.description:
            try:
                description_element = browser.find_element(By.CSS_SELECTOR, "div[data-content-feature='1'] span")
                description = description_element.text
                description = description.replace("<em>", "").replace("</em>", "")
                medicine.description = description
            except NoSuchElementException:
                file = open("trash.html", "w")
                file.write(browser.page_source)
                file.close()

        medicine.save()

    # scrap medicine image
    if not medicine.image:
        browser.get(f"https://www.google.com/search?q={medicine.slug_name}+drug&tbm=isch")
        image_element = browser.find_element(By.CSS_SELECTOR, "div[data-cid='GRID_STATE0'] img")
        medicine.image = image_element.get_attribute("src")
        medicine.save()

    # scrap vendor + vendor medicine. TODO: scrap price.
    try:
        browser.get(f"https://www.google.com/search?q={medicine.slug_name}+drug&tbm=shop")
        vendor_element = browser.find_element(By.CSS_SELECTOR, "span[data-sh-gr='os'] div.aULzUe")
        vendor_name = vendor_element.text

        browser.get(f"https://www.google.com/search?q={vendor_name}company&tbm=isch&tbs=isz:i")
        image_element = browser.find_element(By.CSS_SELECTOR, "div[data-cid='GRID_STATE0'] img")
        image = image_element.get_attribute("src")

        # creating vendor info
        vendor = Vendor.objects.filter(name=vendor_name)
        if not vendor.exists():
            vendor = Vendor.objects.create(name=vendor_name, image=image)
        else:
            vendor = vendor.get()
        if not VendorMedicine.objects.filter(vendor=vendor, medicine=medicine).exists():
            VendorMedicine.objects.create(vendor=vendor, medicine=medicine, price=10.99)

    except NoSuchElementException:
        pass
    
    serializer = MedicineSerializer(medicine)
   
    return Response(serializer.data, status=status.HTTP_200_OK)


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
    serializer = MedicineResponseRx(
        data=response_data["results"],
        many=True
    )
    serializer.is_valid(raise_exception=True)
    serializer.save()

    medicines = [result["slug"] for result in response_data["results"] if result["type"] == "DRUG"]
    serializer = MedicineSearchSerializer(Medicine.objects.filter(slug_name__in=medicines), many=True)
    
    return Response(data=serializer.data, status=status.HTTP_200_OK)
