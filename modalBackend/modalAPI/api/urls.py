from typing import ItemsView
from django.urls import path
from .views import *

urlpatterns = [
    path('item/',ItemView.as_view()),
     path('item/<int:id>',ItemView.as_view()),
]