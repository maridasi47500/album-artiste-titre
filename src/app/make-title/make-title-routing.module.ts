import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeTitlePage } from './make-title.page';

const routes: Routes = [
  {
    path: '',
    component: MakeTitlePage
  },
  {
	      path: 'hey',
	          loadChildren: () => import('./../modal.module').then( m => m.ModalPageModule)
		    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeTitlePageRoutingModule {}
