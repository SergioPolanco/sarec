from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.profile_view, name='accounts.index'),
    url(r'^/administrator/accounts/$', views.profile_view, name='accounts.accounts'),
]
