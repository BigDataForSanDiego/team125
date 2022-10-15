from slugify import slugify
from rest_framework import serializers
from .models import (
    Medicine,
    Vendor
)


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"


class MedicineSerializer(serializers.ModelSerializer):
    vendors = serializers.SerializerMethodField()

    class Meta:
        model = Medicine
        fields = "__all__"

    def get_vendors(self, medicine):
        return VendorSerializer(
            Vendor.objects.filter(vendormedicine__medicine=medicine), many=True
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
