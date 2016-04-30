# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.core import serializers
from django.utils import timezone
from django.views.generic import TemplateView

@login_required
def profile_add_view(request):
    return render(request, 'accounts/add.html')

class create_account(TemplateView):
    def post(self, request, *args, **kwargs):

        username = request.POST.get('username')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        admin = bool(request.POST.get('admin'))
        active = bool(request.POST.get('active'))
        newpassword = request.POST.get('newpassword')
        confirmpassword = request.POST.get('confirmpassword')

        user_model = User.objects.create_user(username=username, password=newpassword)
        user_model.email = email
        user_model.first_name = firstname
        user_model.last_name = lastname
        user_model.is_superuser = admin
        user_model.is_active = active
        user_model.is_staff = 1
        user_model.date_joined = timezone.now()
        user_model.save()
        message = {'status':'False','message': 'Excelente! Datos ingresados satisfactoriamente.'}
        data = serializers.serialize( 'json', message, fields=( 'status', 'message' ), ensure_ascii=False )
        return HttpResponse(data, mimetype='application/json')
