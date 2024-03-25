import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MestitresPageRoutingModule } from './mestitres-routing.module';

import { MestitresPage } from './mestitres.page';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MestitresPageRoutingModule
  ],
  declarations: [MestitresPage]
})
export class MestitresPageModule {}
