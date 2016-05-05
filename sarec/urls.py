# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import serve
urlpatterns = [
    url(r'^', include('administrator.urls')),
    url(r'^administrator/', include('administrator.urls')),
    url(r'^administrator/accounts/', include('accounts.urls')),
    url(r'^administrator/investigator/', include('investigator.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
if settings.DEBUG:
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]
