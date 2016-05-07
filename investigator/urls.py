from django.conf.urls import url

from . import views
from .views import createInvestigator, investigator_modify_view, modifyInvestigator
urlpatterns = [
    url(r'^$', views.investigator_add_view, name='investigatorAdd'),
    url(r'^add/$', views.investigator_add_view, name='investigatorAdd'),
    url(r'^modify/$', views.investigator_modify_view, name='investigatorModify'),
    url(r'^insert/$', createInvestigator.as_view()),
    url(r'^update/$', modifyInvestigator.as_view()),
]
