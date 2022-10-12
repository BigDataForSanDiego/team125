from django.db import models

class Medicine(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to="medicine-images")    

class Vendor(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='vendor-images')
    telephone = models.CharField(max_length=18)
    location = models.TextField()

    class Meta:
        unique_together = ['name', 'location']

class VendorMedicine(models.Model):
    medicine = OneToOneField("Medicine", on_delete=models.CASCADE)
    vendor = OneToOneField("Vendor", on_delete=models.CASCADE)
    price = models.DecimalField()

