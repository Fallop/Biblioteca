from rest_framework import viewsets
from .serializer import LibroSerializer, PrestamoLibroSerializer, PrestatarioSerializer
from .models import Libro, PrestamoLibro, Prestatario
from rest_framework.response import Response
from rest_framework import status

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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    