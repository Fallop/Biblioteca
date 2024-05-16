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
    book = serializers.PrimaryKeyRelatedField(queryset=Libro.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=Prestatario.objects.all())
    book_details = LibroSerializer(source='book', read_only=True)
    user_details = PrestatarioSerializer(source='user', read_only=True)

    class Meta:
        model = PrestamoLibro
        fields = '__all__'
