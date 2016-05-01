from __future__ import unicode_literals

from django.db import models
from datetime import datetime

# Create your models here.
class Investigator(models.Model):
    class Meta():
        db_table = "investigator"

    nombres = models.CharField(max_length = 50, null = False)
    apellidos = models.CharField(max_length = 50, null = False)
    fechaNac = models.DateField(null = False)
    correo = models.EmailField()
    telefono = models.CharField(max_length = 13, null = False)
    direccion = models.CharField(max_length = 300, null = False)
    departamento = models.CharField(max_length = 100, null = False)
    facebook = models.CharField(max_length = 100)
    twitter = models.CharField(max_length = 100)
    googlePlus = models.CharField(max_length = 100)
    fotoPerfil = models.ImageField()
