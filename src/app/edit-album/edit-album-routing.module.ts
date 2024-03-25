import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAlbumPage } from './edit-album.page';

const routes: Routes = [
  {
    path: '',
    component: EditAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAlbumPageRoutingModule {}
