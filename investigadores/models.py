from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Investigadores(models.Model):
    class Meta():
        db_table = "investigadores"

    nombres = models.CharField(max_length=50, null = False)
    apellidos = models.CharField(max_length = 50, null = False)
    
