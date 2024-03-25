import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalExampleComponent } from './modal.component';

const routes: Routes = [
  {
    path: '',
    component: ModalExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
