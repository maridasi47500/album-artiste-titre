import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MestitresPage } from './mestitres.page';

const routes: Routes = [
  {
    path: '',
    component: MestitresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MestitresPageRoutingModule {}
