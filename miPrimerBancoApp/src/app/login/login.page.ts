import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any;
  clave:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    this.router.navigate(['/home']);
  }

}
