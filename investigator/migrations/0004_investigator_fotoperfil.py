# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-05 21:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('investigator', '0003_auto_20160505_2234'),
    ]

    operations = [
        migrations.AddField(
            model_name='investigator',
            name='fotoPerfil',
            field=models.FileField(blank=True, null=True, upload_to='investigator/'),
        ),
    ]
