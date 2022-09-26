from django.urls import path
from backend.views import chatbot_view as views

urlpatterns = [
    path('chat', views.chat, name='chatbot')
]
