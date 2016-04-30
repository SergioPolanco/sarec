* pip install Pillow

def post(self, request, *args, **kwargs):
        if 'username' in request.POST and 'firstname' in request.POST and 'lastname' in request.POST and 'username' in request.POST and 'email' in request.POST and 'admin' in request.POST and 'active' in request.POST and 'newpassword' in request.POST and 'confirmpassword' in request.POST:
            try:
                username = request.POST['username']
                firstname = request.POST['firstname']
                lastname = request.POST['lastname']
                email = request.POST['email']
                admin = request.POST['admin']
                active = request.POST['active']
                newpassword = request.POST['newpassword']
                confirmpassword = request.POST['confirmpassword']
            except:
                message = {'status':'False','message': sys.exc_info()[0]}
                data = serializers.serialize( 'json', message, fields=( 'status', 'message' ) )
                return HttpResponse(data, mimetype='application/json')

            try:
                user_model = User.objects.create_user(username=username, password=password)
                user_model.email = email
                user_model.firstname = firstname
                user_model.lastname = lastname
                user_model.is_superuser = admin
                user_model.is_active = active
                user_model.is_staff = 1
                user_model.date_joined = timezone.now()
                user_model.save()
                message = {'status':'False','message': 'Excelente! Datos ingresados satisfactoriamente.'}
                data = serializers.serialize( 'json', message, fields=( 'status', 'message' ) )
                return HttpResponse(data, mimetype='application/json')
            except:
                message = {'status':'False','message': sys.exc_info()[0]}
                data = serializers.serialize( 'json', message, fields=( 'status', 'message' ) )
                return HttpResponse(data, mimetype='application/json')
                contentType: false,
                    processData: false,
