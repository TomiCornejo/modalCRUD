from distutils.command.upload import upload
from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=55)
    text = models.CharField(max_length=255)
    img = models.ImageField(null=True,upload_to='img/')