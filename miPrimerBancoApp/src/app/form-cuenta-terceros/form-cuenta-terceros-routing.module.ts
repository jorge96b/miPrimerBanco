import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCuentaTercerosPage } from './form-cuenta-terceros.page';

const routes: Routes = [
  {
    path: '',
    component: FormCuentaTercerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCuentaTercerosPageRoutingModule {}
