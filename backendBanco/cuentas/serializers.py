from rest_framework import serializers
from cuentas.models import Cuentas
from drf_extra_fields.fields import Base64ImageField

class CuentaSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Cuentas
    fields = ('nombre','tipoCuenta','numeroCuenta','id',"estado","saldo","fecha_creacion")