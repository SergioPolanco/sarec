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

@login_required
def investigator_modify_view(request):
    investigator_list = Investigator.objects.all().order_by('nombres')
    context = { 'investigator_list': investigator_list }
    return render(request, 'modify.html', context)


class createInvestigator(TemplateView):
    def post(self, request, *args, **kwargs):
        if request.is_ajax() and request.method == 'POST':
            try:
                nuevo_invetigador = Investigator()

                nuevo_invetigador.nombres = request.POST.get('txtNombres')
                nuevo_invetigador.apellidos = request.POST.get('txtApellidos')
                nuevo_invetigador.fechaNac = request.POST.get('txtFechaNac')
                nuevo_invetigador.correo = request.POST.get('txtCorreo')
                nuevo_invetigador.telefono = request.POST.get('txtTelefono')
                nuevo_invetigador.direccion = request.POST.get('txtDireccion')
                nuevo_invetigador.departamento = request.POST.get('txtDepartamento')
                nuevo_invetigador.facebook = request.POST.get('txtFacebook')
                nuevo_invetigador.twitter = request.POST.get('txtTwitter')
                nuevo_invetigador.googlePlus = request.POST.get('txtGooglePlus')
                nuevo_invetigador.fotoPerfil = request.FILES.get('fotoPerfil', False)
                nuevo_invetigador.save()
                message = {'status':'False','message': 'Excelente! Datos ingresados satisfactoriamente.'}
                data = json.dumps(message)
                return HttpResponse(data, content_type =  "application/json")
            except Exception as e:

                message = {'status':'False','message': str(traceback.format_exc())}
                data = json.dumps(message)
                return HttpResponse(data, content_type =  "application/json")

class modifyInvestigator(TemplateView):
    def post(self, request, *args, **kwargs):
        if request.is_ajax() and request.method == 'POST':
            try:
                nuevo_invetigador = Investigator()

                nuevo_invetigador.nombres = request.POST.get('txtNombres')
                nuevo_invetigador.apellidos = request.POST.get('txtApellidos')
                nuevo_invetigador.fechaNac = request.POST.get('txtFechaNac')
                nuevo_invetigador.correo = request.POST.get('txtCorreo')
                nuevo_invetigador.telefono = request.POST.get('txtTelefono')
                nuevo_invetigador.direccion = request.POST.get('txtDireccion')
                nuevo_invetigador.departamento = request.POST.get('txtDepartamento')
                nuevo_invetigador.facebook = request.POST.get('txtFacebook')
                nuevo_invetigador.twitter = request.POST.get('txtTwitter')
                nuevo_invetigador.googlePlus = request.POST.get('txtGooglePlus')
                nuevo_invetigador.fotoPerfil = request.FILES.get('fotoPerfil', False)
                nuevo_invetigador.save()
                message = {'status':'False','message': 'Excelente! Datos ingresados satisfactoriamente.'}
                data = json.dumps(message)
                return HttpResponse(data, content_type =  "application/json")
            except Exception as e:

                message = {'status':'False','message': str(traceback.format_exc())}
                data = json.dumps(message)
                return HttpResponse(data, content_type =  "application/json")
