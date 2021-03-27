import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestProvider } from 'src/providers/rest/rest';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any;
  clave:any;

  response : any

  constructor(public restProvider : RestProvider,private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    var data = { 'username':this.usuario, 'password':this.clave };
    this.restProvider.login(data)
      .then(result => {
        this.response = result;
        console.log(result);
        window.localStorage['token'] = this.response.key;
        this.router.navigate(['/home']);
      }, (err) => {
        console.log(err);
      });
  }
}
