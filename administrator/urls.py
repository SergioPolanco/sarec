from django.conf.urls import url

from . import views

urlpatterns = [
    url(regex=r'^$', view=views.index_view, name='administrator'),
]
