from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from .models import *
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

#Create your views here.
class ItemView(View):
    @method_decorator(csrf_exempt)  
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        items = list(Item.objects.values())
        if len(items) > 0:
            datos={'message':"Success",'items':items}
            status = 200
        else:
            datos={'message':"Items not found ..."}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Item.objects.create(img=["img"],title=jd['title'],text=jd['text'])
        datos={'message':"Success"}
        return JsonResponse(datos,status = 201)

    def put(self,request,id):
        jd = json.loads(request.body)
        items = list(Item.objects.filter(id=id).values())
        if len(items) > 0:
            item = Item.objects.get(id=id)
            item.img = jd['img']
            item.title = jd['title']
            item.text = jd['text']
            item.save()
            datos={'message':"Success"}
            status = 200
        else:
            datos={'message':"Item not found ..."}
            status = 404
        return JsonResponse(datos,status)

    def delete(self,request,id):
        items = list(Item.objects.filter(id=id).values())
        if len(items)>0:
            Item.objects.filter(id=id).delete()
            datos={'message':"Success"}
            status = 200
        else:
            datos={'message':"Item not found ..."}
            status = 404
        return JsonResponse(datos,status)