from django.shortcuts import render
from rest_framework import viewsets
from .serializer import librarySerializer
from .models import prestamoLibro

# Create your views here.
class LoanBookView(viewsets.ModelViewSet):
    serializer_class = librarySerializer 
    queryset = prestamoLibro.objects.all()