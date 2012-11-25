from django.conf.urls.defaults import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'kbg.views.home', name='home'),
    # url(r'^kbg/', include('kbg.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'kbg.login_main.views.index'),
    url(r'^index/', 'kbg.order.views.index'),
    #add by xlin in 2012-5-25
    url(r'^newOrder/', 'kbg.order.views.newOrder'),
    
    #add by xlin in 20121126
    url(r'^register/', 'kbg.register.urls'),
)
if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )
