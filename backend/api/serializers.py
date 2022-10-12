from slugify import slugify
from rest_framework import serializers
from .models import Medicine


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
            Vendor.objects.filter(vendor_medicine__medicine__name=obj.name),
            many=True
        )

class MedicineSearchSerializer(serializers.ModelSerializer):
    name_slug = serializers.SerializerMethodField()

    class Meta:
        model = Medicine
        fields = ["name"]
    
    def get_name_slug(self, obj):
        return slugify(obj.name)

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
