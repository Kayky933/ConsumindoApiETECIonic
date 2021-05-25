import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletPage } from './delet.page';

const routes: Routes = [
  {
    path: '',
    component: DeletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletPageRoutingModule {}
