from django.db import models
import datetime


# Create your models here.
class prestamoLibro(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField(("Date"), default=datetime.date.today)
    dateReturn = models.DateField(("Date Return"), default=datetime.date.today)

    def __str__(self):
        return self.name