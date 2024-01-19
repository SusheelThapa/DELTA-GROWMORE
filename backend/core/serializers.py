from rest_framework import serializers

from .models import User

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