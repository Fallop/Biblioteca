from django.contrib import admin
from .models import PrestamoLibro, Libro, Prestatario

# Register your models here.
admin.site.register(PrestamoLibro)
admin.site.register(Libro)
admin.site.register(Prestatario)