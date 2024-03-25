import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditArtistPage } from './edit-artist.page';

const routes: Routes = [
  {
    path: '',
    component: EditArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditArtistPageRoutingModule {}
