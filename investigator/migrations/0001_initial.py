# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-01 15:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Investigator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('fechaNac', models.DateField()),
                ('correo', models.EmailField(max_length=254)),
                ('telefono', models.CharField(max_length=13)),
                ('direccion', models.CharField(max_length=300)),
                ('departamento', models.CharField(max_length=100)),
                ('facebook', models.CharField(max_length=100)),
                ('twitter', models.CharField(max_length=100)),
                ('googlePlus', models.CharField(max_length=100)),
                ('fotoPerfil', models.ImageField(upload_to=b'')),
            ],
            options={
                'db_table': 'investigator',
            },
        ),
    ]
