# Create your views here.
from django.shortcuts import render_to_response

def register(request):
    context={}
    return render_to_response('home.html',context)