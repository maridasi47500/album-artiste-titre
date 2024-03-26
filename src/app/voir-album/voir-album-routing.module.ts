import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirAlbumPage } from './voir-album.page';

const routes: Routes = [
  {
    path: '',
    component: VoirAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirAlbumPageRoutingModule {}
