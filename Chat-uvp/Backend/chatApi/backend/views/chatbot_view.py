
from pickletools import read_uint1
from backend.views.bot import mainBot

from tensorflow.python.framework import ops
import json

from backend.models import messages
from webbrowser import get
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def getChat(request):
    return Response('hola')


@api_view(['POST'])
def chat(request):
    data = request.data
    message = mainBot(data['message'])
    return Response(message)
