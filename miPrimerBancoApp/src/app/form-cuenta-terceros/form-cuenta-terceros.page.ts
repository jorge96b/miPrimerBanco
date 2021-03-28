import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-form-cuenta-terceros',
  templateUrl: './form-cuenta-terceros.page.html',
  styleUrls: ['./form-cuenta-terceros.page.scss'],
})
export class FormCuentaTercerosPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  bandera = false;
  cuentasTerceros: any;

  constructor(public formBuilder: FormBuilder , public navCtrl : NavController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      alias: ['', [Validators.required,]],
      entidadBancaria: ['', [Validators.required,]],
      tipoCuenta: ['', [Validators.required,]],
      numeroCuenta: ['', [Validators.minLength(12)] ],
      numeroIdentificacion: ['',[Validators.minLength(10)]],
      moneda: ['', [Validators.required,]]
    })
    this.cuentasTerceros=JSON.parse(localStorage.getItem('cuentasTerceros'));
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      alert("Debes ingresar todos los datos");
      return false;
    } else {
      console.log(this.ionicForm.value);
      this.cuentasTerceros.forEach(element => {
        if(element.numeroCuenta == this.ionicForm.value.numeroCuenta){
          this.bandera = true;
        }
      });
      if(this.bandera == false){
        this.addCuenta(this.ionicForm.value);
        this.navCtrl.pop();
      }else{
        alert("El número de cuenta ya se encuentra asociado a otro alias.");
      }
    }
  }


  addCuenta(dataCuenta){
    if(localStorage.getItem('cuentasTerceros')==null){
      var pal = [];
      pal[0] = dataCuenta;
      localStorage.setItem("cuentasTerceros",JSON.stringify(pal));
    }else{
      var serch = JSON.parse(localStorage.getItem('cuentasTerceros'));
      serch.push(dataCuenta);
      localStorage.setItem("cuentasTerceros",JSON.stringify(serch));
    }
  }

}
