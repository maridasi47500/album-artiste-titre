import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAlbumPageRoutingModule } from './edit-album-routing.module';

import { EditAlbumPage } from './edit-album.page';
import { ReactiveFormsModule } from '@angular/forms';
 import { TypeaheadComponent1 } from './../typeahead1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditAlbumPageRoutingModule
  ],
  declarations: [EditAlbumPage,TypeaheadComponent1]
})
export class EditAlbumPageModule {}
