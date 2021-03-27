import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaCuentas = [
    { id: 1, tipoCuenta: 'Ahorros', numeroCuenta:86400000, estado: 'Activa', saldo: 1000000 },
    { id: 2, tipoCuenta: 'Ahorros', numeroCuenta: 3600000, estado: 'Activa', saldo: 2000000 },
    { id: 3, tipoCuenta: 'Corriente', numeroCuenta: 86400000, estado: 'Inactiva', saldo: 3000000 },
    { id: 4, tipoCuenta: 'Corriente', numeroCuenta: 604800000, estado: 'Activa', saldo: 0 },
  ];

  constructor(private router: Router) {}


  detalleCuenta(){
    this.router.navigate(['/detalle-cuenta']);
  }
}
