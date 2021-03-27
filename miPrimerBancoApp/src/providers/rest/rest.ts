import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
Generated class for the RestProvider provider.
See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8000/';
  loginService = 'api/login/';
  apiCuentas = 'cuentas/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+this.loginService, data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getCuentas() {
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+this.apiCuentas)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        });
      });
    }

}

