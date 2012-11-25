from django.conf.urls.defaults import *

urlpatterns = patterns('register',
            (r'^$', 'views.register'),
)