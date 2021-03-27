import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestProvider } from 'src/providers/rest/rest';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaCuentas :any;

  constructor(private router: Router,public restProvider : RestProvider) {}

  ngOnInit() {
    this.consultarCuentas();
  }

  detalleCuenta(){
    this.router.navigate(['/detalle-cuenta']);
  }

  consultarCuentas() {
    this.restProvider.getCuentas()
    .then(data => {
      console.log(data);
      this.listaCuentas=data;
    });
  }

}
