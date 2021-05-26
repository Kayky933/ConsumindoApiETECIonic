import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutPage } from './put.page';

const routes: Routes = [
  {
    path: '',
    component: PutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutPageRoutingModule {}
