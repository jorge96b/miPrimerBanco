from django.db import models

# Create your models here.

class Cuentas(models.Model):

    CAT = (
        (0, 'Ahorros'),
        (1, 'Corriente'),
    )

    ESTADOS = (
        (0, 'Activa'),
        (1, 'Inactica'),
    )

    nombre = models.CharField(max_length=200)
    tipoCuenta = models.IntegerField(default=0, choices=CAT)
    numeroCuenta = models.IntegerField()
    estado = models.IntegerField(default=0, choices=ESTADOS)
    saldo = models.IntegerField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre