# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf.urls import include, url
from django.contrib import admin
urlpatterns = [
    url(r'^', include('administrator.urls')),
    url(r'^administrator/', include('administrator.urls')),
    url(r'^administrator/accounts/', include('accounts.urls')),
    url(r'^investigadores/', include('investigadores.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
