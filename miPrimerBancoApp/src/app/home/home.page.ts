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
  cuentasTerceros : any;
  cuentas = "propias";
  numCuentas = false;

  constructor(private router: Router,public restProvider : RestProvider) {}

  ngOnInit() {
    this.consultarCuentas();
    this.cuentasTerceros=JSON.parse(localStorage.getItem('cuentasTerceros'));
  }


  ionViewWillEnter(){
    this.cuentas = "terceros";
    this.cuentasTerceros=JSON.parse(localStorage.getItem('cuentasTerceros'));
  }

  detalleCuenta(){
    this.router.navigate(['/detalle-cuenta']);
  }

  segmentChanged(){
    console.log(this.cuentas);
  }

  consultarCuentas() {
    this.restProvider.getCuentas()
    .then(data => {
      this.listaCuentas=data;
      if(this.listaCuentas.length>0){
        this.numCuentas = true;
      }
    });
  }



}
