import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalExampleComponent } from './modal.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
	  imports: [
		      CommonModule,
		          FormsModule,
			      IonicModule,ReactiveFormsModule,
			          ModalPageRoutingModule
				    ],
				      declarations: [ModalExampleComponent]
})
export class ModalPageModule {}
