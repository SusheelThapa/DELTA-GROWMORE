from django.contrib import admin

from .models import User, Post, PostComment, PostLike

admin.site.register(User)
admin.site.register(Post)
admin.site.register(PostComment)
admin.site.register(PostLike)
