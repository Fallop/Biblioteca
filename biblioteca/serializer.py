from rest_framework import serializers
from .models import prestamoLibro

class librarySerializer (serializers.ModelSerializer):
    class Meta:
        model = prestamoLibro
        fields = '__all__'