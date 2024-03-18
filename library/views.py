from django.shortcuts import render
from rest_framework import viewsets
from .serializer import LibrarySerializer
from .models import Library

# Create your views here.
class LibraryView(viewsets.ModelViewSet):
    serializer_class = LibrarySerializer 
    queryset = Library.objects.all()