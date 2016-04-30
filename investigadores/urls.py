from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.crearInvestigador, name='crearInvestigador'),
    url(r'^agregar/$', views.crearInvestigador, name='crearInvestigador'),
    #url(r'^insert/$', create_account.as_view()),
]
