from rest_framework import serializers

from .models import User, Post, PostComment, PostLike

# Serializer for User Registeration.
class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name', 'password']
        extra_kwargs={
            'password':{'write_only':True}
        }

    # Overriding the create method to create a user instance.
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


# Serializer for User Login.
class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ['username','password']


# Serializer for User Profile.
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


# Serializer for User Posts.
class UserPostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['user', 'description', 'img']

# Serializer for Commenting on posts.
class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ['id', 'post', 'comment', 'commented_by']

# Serializer for Likes on posts.
class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = ['id', 'post', 'liked_by']

# Serializer for viewing post and all of it's information.
class PostViewSerializer(serializers.ModelSerializer):
    postcomment_set = PostCommentSerializer(many=True)
    postlike_set = PostLikeSerializer(many=True)
    like_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = ['id', 'user', 'description', 'created_at', 'img', 'postcomment_set', 'postlike_set', 'like_count', 'is_liked']

    def get_is_liked(self, obj):
        print(obj.postlike_set)
        liked = PostLike.objects.all().filter(post=obj.id, liked_by=self.context['user'])
        if liked:
            return True
        else:
            return False

    
    def get_like_count(self, obj):
        return PostLike.objects.all().filter(post=obj.id).count()
