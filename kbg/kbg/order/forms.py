from django import forms
from django.forms import ModelForm

from models import Order

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ('course_name', 'course_time', 'course_address', 'price', 'status',)