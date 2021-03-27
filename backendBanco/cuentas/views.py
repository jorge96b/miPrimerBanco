from django.shortcuts import render
from cuentas.models import Cuentas
from rest_framework import generics
from cuentas.serializers import CuentaSerializer

class CuentaList(generics.ListCreateAPIView):
    serializer_class = CuentaSerializer
    queryset = Cuentas.objects.all()

class CuentaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CuentaSerializer
    queryset = Cuentas.objects.all()