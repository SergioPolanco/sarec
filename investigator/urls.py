from django.conf.urls import url

from . import views
from .views import createInvestigator
urlpatterns = [
    url(r'^$', views.investigator_add_view, name='investigatorAdd'),
    url(r'^add/$', views.investigator_add_view, name='investigatorAdd'),
    url(r'^insert/$', createInvestigator.as_view()),
]
