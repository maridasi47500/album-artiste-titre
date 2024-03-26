import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirAlbumPageRoutingModule } from './voir-album-routing.module';

import { VoirAlbumPage } from './voir-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirAlbumPageRoutingModule
  ],
  declarations: [VoirAlbumPage]
})
export class VoirAlbumPageModule {}
