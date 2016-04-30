from django.shortcuts import render
from .models import Investigadores
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def crearInvestigador(request):
    nuevo_investigador = Investigadores()
    nuevo_investigador.nombres = "Sergio"
    nuevo_investigador.apellidos = "Pao"
    nuevo_investigador.save()

    request.POST.mpo
    return render (request, 'agregar.html')
