import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-cuenta',
  templateUrl: './detalle-cuenta.page.html',
  styleUrls: ['./detalle-cuenta.page.scss'],
})
export class DetalleCuentaPage implements OnInit {

  listaMovimientos = [
    { numeroTransaccion: 1, fecha: '12-02-2020', valor:1000, lugar: 'Cafe'},
    { numeroTransaccion: 2, fecha: '15-02-2020', valor:13000, lugar: 'Comida'},
    { numeroTransaccion: 3, fecha: '1-03-2020', valor:90500, lugar: 'Pago pse'},
    { numeroTransaccion: 4, fecha: '20-04-2020', valor:150300, lugar: 'Ropa'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
