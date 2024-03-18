from rest_framework import serializers
from .models import Library

class librarySerializer (serializers.ModelSerializer):
    class Meta:
        model = 'library'
        fields = '__all__'