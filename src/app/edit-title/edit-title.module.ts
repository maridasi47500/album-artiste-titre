import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTitlePageRoutingModule } from './edit-title-routing.module';

import { EditTitlePage } from './edit-title.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    EditTitlePageRoutingModule
  ],
  declarations: [EditTitlePage]
})
export class EditTitlePageModule {}
