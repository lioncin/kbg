from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
from kbg.order.views import index

urlpatterns = patterns('order.views',
    # Examples:
    # url(r'^$', 'kbg.views.home', name='home'),
    # url(r'^kbg/', include('kbg.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', 'index'),
)