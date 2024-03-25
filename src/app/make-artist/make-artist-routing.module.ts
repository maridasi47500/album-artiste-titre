import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeArtistPage } from './make-artist.page';

const routes: Routes = [
  {
    path: '',
    component: MakeArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeArtistPageRoutingModule {}
