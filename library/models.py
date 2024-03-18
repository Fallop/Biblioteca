from django.db import models

# Create your models here.
class Library(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField
    dateReturn = models.DateField

    def __str__(self):
        return self.name