from django.urls import path

from rest_framework_simplejwt import views as jwt_views

from .views import UserRegistrationView, UserLoginView, UserProfileView, PostView, CommentCreateView, LikeCreateView

urlpatterns = [
    path('auth/register/', UserRegistrationView.as_view()),
    path('auth/login/', UserLoginView.as_view()),
    path('auth/jwt/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('auth/users/me/', UserProfileView.as_view()),
    path('api/post/', PostView.as_view()),
    path('api/post/comment/', CommentCreateView.as_view()),
    path('api/post/like/', LikeCreateView.as_view()),
]