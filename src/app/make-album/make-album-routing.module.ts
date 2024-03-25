import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeAlbumPage } from './make-album.page';

const routes: Routes = [
  {
    path: '',
    component: MakeAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeAlbumPageRoutingModule {}
