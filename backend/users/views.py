from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .serializers import NavbarContentSerializer
from . models import NavbarContent
from django.conf import settings

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from project1.settings import EMAIL_HOST_USER

import logging
import random
import string


logger = logging.getLogger(__name__)

@api_view(['POST'])
def login(request):
    if request.method=='POST':
        username=request.data.get('username')
        password=request.data.get('password')
        print(username,password)
        user=authenticate(username=username,password=password)
        if user is not None:
            refresh=RefreshToken.for_user(user)
            return Response({'message':'login successful','status':True,'access':str(refresh.access_token),'refresh':str(refresh)})
        else :
            return Response({'message':'unsuccessful','status':False})
            

    return Response({"message":"it is a post request"})



# class UserCreateView(generics.CreateAPIView):
#     serializer_class = UserSerializer

@api_view(['GET','POST'])
def navbar(request):
    data=NavbarContent.objects.all()
    serializer=NavbarContentSerializer(data,many=True)
    print(serializer.data)
    return Response({"data":serializer.data})

@api_view(['GET'])
def userlist(request):
    data=User.objects.all()
    serializer=UserSerializer(data,many=True)
    return Response({"data":serializer.data})




@api_view(['POST'])
def user_registration(request):
    if request.method == 'POST':
        data = request.data
        logger.debug(f"Received data: {data}")
        serializer = UserSerializer(data=data)

        if not serializer.is_valid():
            logger.debug(f"Serializer errors: {serializer.errors}")
            return Response({
                'data': serializer.errors,
                'message': 'Something went wrong'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Send email
        subject = "New User is Registered"
        message = f"Dear {data.get('first_name')}, your temporary Username is: abcd and Password is: 123"
        email = data.get('email')
        recipient_list = [email]

        try:
            send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list, fail_silently=True)
            serializer.save()
            logger.debug("User created successfully")
            return Response({
                'data': serializer.data,
                'message': 'New user is created'
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            logger.error(f"Exception during user creation: {str(e)}", exc_info=True)
            return Response({
                'message': f'Something went wrong during user creation: {str(e)}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # If GET request, handle it appropriately (e.g., return a list of users)
    return Response({'message': 'GET request received'}, status=status.HTTP_200_OK)










