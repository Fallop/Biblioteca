# Generated by Django 5.0.4 on 2024-04-15 20:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='prestamoLibros',
            new_name='prestamoLibro',
        ),
    ]