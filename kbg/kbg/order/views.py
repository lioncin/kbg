# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.conf import settings
from kbg.order.forms import OrderForm
import json

#add by xlin in 2012-5-25
def newOrder(request):
    context = {}
    context['settings'] = settings
    context['MEDIA_URL'] = settings.MEDIA_URL
    if request.method == 'GET':
        form = OrderForm(request['GET'])
    else:
        form = OrderForm(request['POST'])
        
    context['form'] = form
    return render_to_response('new_order.html', context)
