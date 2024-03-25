import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeArtistPageRoutingModule } from './make-artist-routing.module';

import { MakeArtistPage } from './make-artist.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
		      ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeArtistPageRoutingModule
  ],
  declarations: [MakeArtistPage]
})
export class MakeArtistPageModule {}
