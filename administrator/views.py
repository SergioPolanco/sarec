# administrator/views.py

from django.shortcuts import render
from django.utils import timezone

def index_view(request):
    context = {
        'ahora': timezone.now()
    }
    return render(request, 'administrator/index.html', context)
