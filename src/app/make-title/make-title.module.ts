import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeTitlePageRoutingModule } from './make-title-routing.module';

import { MakeTitlePage } from './make-title.page';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule, 
    MakeTitlePageRoutingModule
  ],
  declarations: [MakeTitlePage]
})
export class MakeTitlePageModule {}
