import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditArtistPageRoutingModule } from './edit-artist-routing.module';

import { EditArtistPage } from './edit-artist.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    EditArtistPageRoutingModule
  ],
  declarations: [EditArtistPage]
})
export class EditArtistPageModule {}
