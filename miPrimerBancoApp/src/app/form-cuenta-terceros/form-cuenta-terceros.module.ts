import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCuentaTercerosPageRoutingModule } from './form-cuenta-terceros-routing.module';

import { FormCuentaTercerosPage } from './form-cuenta-terceros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCuentaTercerosPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormCuentaTercerosPage]
})
export class FormCuentaTercerosPageModule {}
