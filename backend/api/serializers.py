from slugify import slugify
from rest_framework import serializers
from .models import (
    Medicine,
    Vendor,
    VendorMedicine
)

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ["name", "image", "telephone", "location"]

class VendorMedicineSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer()

    class Meta:
        model = VendorMedicine
        fields = ["vendor", "price", "shipping"]

    def to_representation(self, *args, **kwargs):
        data = super().to_representation(*args, **kwargs)
        vendor_data = data["vendor"] 
        del data["vendor"]
        data.update(vendor_data)
        return data

class MedicineSerializer(serializers.ModelSerializer):
    vendors = serializers.SerializerMethodField()
    
    class Meta:
        model = Medicine
        fields = "__all__"

    def get_vendors(self, medicine):
        return VendorMedicineSerializer(
            VendorMedicine.objects.filter(medicine=medicine), many=True
        ).data


class MedicineSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = "__all__"


class MedicineResponseRx(serializers.Serializer):
    display = serializers.CharField()
    slug = serializers.CharField()
    type = serializers.CharField()

    def create(self, validated_data):
        if validated_data["type"] != "DRUG":
            return
        data = {
            "name": validated_data["display"],
            "slug_name": validated_data["slug"] 
        }
        if Medicine.objects.filter(name=data["name"]).exists():
            return
        return Medicine.objects.create(**data)


#### MEDICINES SEARCH SERIALIZER
# [
#   {
#       slug_name: ”bupropion-xl”
#       name: “Bupropion XL”,
#   },
#   …
# ]

#### MEDICINE SERIALIZER
# {
#   name_id: ”bupropion-xl”
#   name: “Bupropion XL”,
#   description: “..........”,
#   product_image: <url>,
#   vendors: [
#       {
#           vendor_name_id: “costco”,
#           vendor_name: “Costco”,
#           contact_info: {
#           location: “”,
#           telephone: “”,
#       }
#       vendor_image: <url>,
#       price: 4.99,
#   }
#   …
#   ]
#     …
# }
