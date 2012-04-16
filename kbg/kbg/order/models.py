from django.db import models
from django.contrib.auth.models import User

# basic order
# add by xlin in 20120411
ORDER_STATUS = (
              (1, 'new'),
              (2, 'in-process'),
              (3, 'finish'),
              )
class Order(models.Model):
    course_name = models.CharField(max_length=20)
    course_time = models.TimeField()
    course_address = models.CharField(max_length=255)
    price = models.IntegerField()
    creater = models.ForeignKey(User)
    update_date = models.DateField()
    status = models.IntegerField(choices=ORDER_STATUS)
