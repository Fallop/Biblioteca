from rest_framework import viewsets
from .serializer import LibroSerializer, PrestamoLibroSerializer, PrestatarioSerializer
from .models import Libro, PrestamoLibro, Prestatario

# Create your views here.
class LoanBookView(viewsets.ModelViewSet):
    serializer_class = PrestamoLibroSerializer 
    queryset = PrestamoLibro.objects.all()

class BookView(viewsets.ModelViewSet):
    serializer_class = LibroSerializer 
    queryset = Libro.objects.all()

class BorrowerView(viewsets.ModelViewSet):
    serializer_class = PrestatarioSerializer 
    queryset = Prestatario.objects.all()

    