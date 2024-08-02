from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import NavbarContentSerializer
from . models import NavbarContent
from django.contrib.auth.models import User

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



class UserCreateView(generics.CreateAPIView):
    serializer_class = UserSerializer

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