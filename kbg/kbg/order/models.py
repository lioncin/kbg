# coding:utf-8
from django.db import models
from django.contrib.auth.models import User
from bsddb.test.test_all import verbose

# basic order
# add by xlin in 20120411
ORDER_STATUS = (
              (1, '新建'),
              (2, '预定中'),
              (3, '完成'),
              )
class Order(models.Model):
    course_name = models.CharField(max_length=20,verbose_name='科目名称')
    course_time = models.TimeField(verbose_name='考试时间')
    course_address = models.CharField(max_length=255,verbose_name='考试地址')
    price = models.IntegerField(verbose_name='考试报价')
    creater = models.ForeignKey(User,verbose_name='考试人', null=None)
    update_date = models.DateField(auto_now_add=True)
    status = models.IntegerField(choices=ORDER_STATUS,verbose_name='状态')
