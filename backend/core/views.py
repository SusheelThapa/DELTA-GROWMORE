import requests
import json
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .renderers import UserRenderer
from .models import User, Post, PostLike, PostComment
from .serializers import UserRegisterationSerializer, UserLoginSerializer, UserProfileSerializer, UserPostCreateSerializer, PostViewSerializer, PostCommentSerializer, PostLikeSerializer


# Utility function to generate JWT tokens for a user
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# View for user registration
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        user_info = UserProfileSerializer(user)
        return Response({'token':token, 'info':user_info.data}, status=status.HTTP_201_CREATED)


# View for user login
class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    username = serializer.data.get('username')
    password = serializer.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        token = get_tokens_for_user(user)
        user_info = UserProfileSerializer(user)
        return Response({'token':token, 'info':user_info.data}, status=status.HTTP_200_OK)
    else:
        Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)

# View for User Profile.
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

# View for Post creation and list.
class PostView(ListCreateAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.prefetch_related('postcomment_set', 'postlike_set').all().order_by('-created_at')
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PostViewSerializer
        if self.request.method == 'POST':
            return UserPostCreateSerializer
        
    def get_serializer_context(self):
        return {'user':self.request.user}
        

# View for adding comments on posts.
class CommentCreateView(CreateAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    serializer_class = PostCommentSerializer


# View for adding likes on posts.
class LikeCreateView(CreateAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    serializer_class = PostLikeSerializer


# View to integrate Khalti payment.
class KhaltiPaymentView(APIView):
    def post(self, request):
        url = "https://a.khalti.com/api/v2/epayment/initiate/"

        payload = json.dumps({
            "return_url": request.data.get('return_url'),
            "website_url": "https://example.com/",
            "amount": request.data.get('amount'),
            "purchase_order_id": 1,
            "purchase_order_name": "test",
            "customer_info": {
            "name": "Ram Bahadur",
            "email": "test@khalti.com",
            "phone": "9800000001"
            }
        })
        headers = {
            'Authorization': 'key 8dc5e3777aaf4d2595c2ee3a1e10c1f4',
            'Content-Type': 'application/json',
        }

        response = requests.request("POST", url, headers=headers, data=payload)
        print(response.text)
        return Response(response.text)