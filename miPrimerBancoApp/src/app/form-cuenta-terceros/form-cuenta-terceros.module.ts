import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCuentaTercerosPageRoutingModule } from './form-cuenta-terceros-routing.module';

import { FormCuentaTercerosPage } from './form-cuenta-terceros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCuentaTercerosPageRoutingModule
  ],
  declarations: [FormCuentaTercerosPage]
})
export class FormCuentaTercerosPageModule {}
