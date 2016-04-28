from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index_view, name='administrator.dashboard'),
    url(r'^login/$', views.login_view, name='administrator.index'),
]
