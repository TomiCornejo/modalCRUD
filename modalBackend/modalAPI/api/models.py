from django.db import models

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=55)
    text = models.CharField(max_length=255)
    img = models.ImageField(upload_to="itemimg",null=True)