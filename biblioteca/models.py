from django.db import models
import datetime

class Libro(models.Model):
    title = models.CharField(max_length=200)
    editorialName = models.CharField(max_length=200)
    autorName = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Prestatario(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=10)
    direction = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class PrestamoLibro(models.Model):
    book = models.ForeignKey(Libro, on_delete=models.CASCADE)
    user = models.ForeignKey(Prestatario, on_delete=models.CASCADE)
    date = models.DateField(("Date"), default=datetime.date.today)
    dateReturn = models.DateField(("Date Return"), default=datetime.date.today)

    def __str__(self):
        return f'{self.user.name} - {self.book.title}'
