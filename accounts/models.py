from __future__ import unicode_literals

from django.db import models
from django.conf import settings

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    photo = models.FileField(upload_to='profiles/', blank=True, null=True)
