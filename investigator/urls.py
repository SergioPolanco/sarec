from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.investigator_add_view, name='investigatorAdd'),
    url(r'^add/$', views.investigator_add_view, name='investigatorAdd'),
    #url(r'^insert/$', create_account.as_view()),
]
