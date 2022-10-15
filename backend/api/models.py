from django.db import models


class Medicine(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug_name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to="medicine-images", null=True)

class Vendor(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="vendor-images", null=True)
    telephone = models.CharField(max_length=18, null=True, default="(626) 795-5161")
    location = models.TextField(default="San Diego, CA")

    class Meta:
        unique_together = ["name", "location"]


class VendorMedicine(models.Model):
    medicine = models.ForeignKey("Medicine", on_delete=models.CASCADE)
    vendor = models.ForeignKey("Vendor", on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=7, decimal_places=2,)

    class Meta:
        unique_together = ["medicine", "vendor"]