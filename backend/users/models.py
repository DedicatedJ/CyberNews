from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    """
    Custom user model that extends Django's AbstractUser.
    Add custom fields as needed.
    """
    # Add custom fields here
    bio = models.TextField(max_length=500, blank=True)
    preferences = models.JSONField(default=dict, blank=True)
    
    def __str__(self):
        return self.email
