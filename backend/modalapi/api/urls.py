from django.urls import path
from .views.itemView import item_api_view,item_detail_api_view

urlpatterns = [
    path('item/',item_api_view,name='item_api'),
    path('item/<int:pk>',item_detail_api_view,name='item_detail_api'),
]
