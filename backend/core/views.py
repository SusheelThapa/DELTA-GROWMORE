import os
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

import numpy as np
import tensorflow as tf
from io import BytesIO
from PIL import Image

from django.conf import settings
temp = os.path.join(settings.BASE_DIR, "core/")

MODEL = tf.keras.models.load_model(temp+"ml_model")
CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]


class predict(APIView):
    def post(self, request):
        if 'image' not in request.FILES:
            return Response({'error': 'No image provided'}, status=400)

        image = request.FILES['image']
        image_array = read_file_as_image(image.read())
        img_batch = np.expand_dims(image_array, 0)

        predictions = MODEL.predict(img_batch)
        predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
        confidence = float(np.max(predictions[0]))

        if predicted_class == 'Early Blight':
            res = "To manage Early Blight disease in potatoes, start by identifying dark brown lesions with concentric rings on lower leaves. Remove and isolate infected plants, pruning affected leaves with sanitized tools. Maintain a clean environment by removing debris and fallen leaves. Water at the base to avoid wetting foliage, and consider applying fungicides labeled for Early Blight. Apply organic mulch, practice crop rotation, and opt for resistant potato varieties. Regular monitoring for signs of the disease and prompt intervention will help minimize its impact on the crop."
        elif predicted_class == 'Late Blight':
            res = "To address Late Blight disease in potatoes, begin by closely inspecting plants for dark, water-soaked lesions on leaves, usually starting at the tips. Immediately isolate and remove infected plants to prevent the spread. Prune affected foliage, ensuring tools are sanitized to avoid further contamination. Keep the surroundings clean by removing fallen leaves and debris. Opt for morning watering at the base to allow foliage to dry quickly. Consider applying fungicides specifically designed for Late Blight, following recommended guidelines. Employ organic mulch, practice crop rotation, and select potato varieties resistant to Late Blight. Regularly monitor the crop for any signs of the disease, promptly taking preventive measures as necessary to protect the potato plants."

        return Response({
            'class': predicted_class,
            'confidence': confidence,
            'res':res
        })

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

# Utility function to generate JWT tokens for a user``
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
    
# View for fetching weather data.
class MonitoringView(APIView):
    def get(self, request):
        url = "https://api.openweathermap.org/data/2.5/weather?lat=26.816667&lon=87.283333&appid=4ea131fa3e5db7576491b75e15a9f65f"
        response = requests.request("GET", url)
        return Response({'weather':response.text}, status=status.HTTP_200_OK)