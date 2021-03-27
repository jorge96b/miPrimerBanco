from django.conf.urls import url
from cuentas import views


urlpatterns = [
    url(r'^cuentas/$', views.CuentaList.as_view()),
    url(r'^cuentas/(?P<pk>[0-9]+)/$', views.CuentaDetail.as_view()),
]