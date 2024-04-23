from rest_framework import serializers
from .models import Libro, PrestamoLibro, Prestatario

class PrestatarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestatario
        fields = '__all__'

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'

class PrestamoLibroSerializer(serializers.ModelSerializer):
    book = LibroSerializer()
    user = PrestatarioSerializer()

    class Meta:
        model = PrestamoLibro
        fields = '__all__'
