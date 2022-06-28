from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from .models.item import Item

class ItemSerializer(serializers.ModelSerializer):
    img = Base64ImageField(required=False)
    class Meta:
        model =Item
        fields = '__all__'