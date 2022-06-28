from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import ItemSerializer
from ..models.item import Item

@api_view(['GET','POST'])
def item_api_view(request):
    
    if request.method == 'GET':
        items = Item.objects.all()
        items_serializer = ItemSerializer(items,many = True)
        return Response(items_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        item_serializer = ItemSerializer(data = request.data)
        if item_serializer.is_valid():
            item_serializer.save()
            return Response({'message':'Item created'},status = status.HTTP_201_CREATED)
        return Response(item_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def item_detail_api_view(request,pk=None):
    
    item = Item.objects.filter(id = pk).first()
    if item:
    
        if request.method == 'GET':
            item_serializer = ItemSerializer(item)
            return Response(item_serializer.data,status = status.HTTP_200_OK)

        elif request.method == 'PUT':
            item_serializer = ItemSerializer(item,data = request.data)
            if item_serializer.is_valid():
                item_serializer.save()
                return Response({'message':'Item updated'},status = status.HTTP_200_OK)
            return Response(item_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            item.img.delete(save=True)
            item.delete()
            return Response({'message':'Item deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Item not found'},status = status.HTTP_400_BAD_REQUEST)