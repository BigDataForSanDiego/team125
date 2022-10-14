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

    def get_vendors(self, obj):
        return VendorSerializer(
            Vendor.objects.filter(vendor_medicine__medicine__name=obj.name), many=True
        )


class MedicineSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = "__all__"


class MedicineResponseRx(serializers.ModelSerializer):
    name = serializers.CharField(source="display")
    slug_name = serializers.CharField(source="slug")

    class Meta:
        model = Medicine
        fields = "__all__"


#### MEDICINE SEARCH SERIALIZER
# [
#   {
#       name_id: ”bupropion-xl”
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
