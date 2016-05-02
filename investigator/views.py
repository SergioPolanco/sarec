from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
import json, traceback
from .models import Investigator
from django.http import HttpResponse


# Create your views here.

@login_required
def investigator_add_view(request):
    return render(request, 'add.html')

class createInvestigator(TemplateView):
    def post(self, request, *args, **kwargs):
        try:
            nuevo_invetigador = Investigator()
            nombres = request.POST.get('txtNombres')
            apellidos = request.POST.get('txtApellidos')
            fechaNac = request.POST.get('txtFechaNac')
            correo = request.POST.get('txtCorreo')
            telefono = request.POST.get('txtTelefono')
            direccion = request.POST.get('txtDireccion')
            departamento = request.POST.get('txtDepartamento')
            facebook = request.POST.get('txtFacebook')
            twitter = request.POST.get('txtTwitter')
            googlePlus = request.POST.get('txtGooglePlus')


            nuevo_invetigador.nombres = nombres
            nuevo_invetigador.apellidos = apellidos
            nuevo_invetigador.fechaNac = fechaNac
            nuevo_invetigador.correo = correo
            nuevo_invetigador.telefono = direccion
            nuevo_invetigador.departamento = departamento
            nuevo_invetigador.facebook = facebook
            nuevo_invetigador.twitter = twitter
            nuevo_invetigador.googlePlus = googlePlus
            nuevo_invetigador.save()
            message = {'status':'False','message': 'Excelente! Datos ingresados satisfactoriamente.'}
            data = json.dumps(message)
            return HttpResponse(data, content_type =  "application/json")
        except Exception as e:

            message = {'status':'False','message': str(traceback.format_exc())}
            data = json.dumps(message)
            return HttpResponse(data, content_type =  "application/json")
