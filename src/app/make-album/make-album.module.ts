import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAlbumPageRoutingModule } from './make-album-routing.module';

import { MakeAlbumPage } from './make-album.page';
import { ReactiveFormsModule } from '@angular/forms';
 import { TypeaheadComponent } from './../typeahead.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeAlbumPageRoutingModule
  ],
  declarations: [MakeAlbumPage,TypeaheadComponent]
})
export class MakeAlbumPageModule {}
