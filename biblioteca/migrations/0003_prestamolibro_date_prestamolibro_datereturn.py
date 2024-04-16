# Generated by Django 5.0.4 on 2024-04-15 21:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0002_rename_prestamolibros_prestamolibro'),
    ]

    operations = [
        migrations.AddField(
            model_name='prestamolibro',
            name='date',
            field=models.DateField(default=datetime.date.today, verbose_name='Date'),
        ),
        migrations.AddField(
            model_name='prestamolibro',
            name='dateReturn',
            field=models.DateField(default=datetime.date.today, verbose_name='Date Return'),
        ),
    ]