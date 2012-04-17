# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.conf import settings

from kbg.order.forms import *

def index(request):
    context = {}
    context['MEDIA_URL'] = settings.MEDIA_URL
    return render_to_response('index.html', context)
