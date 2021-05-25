import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetOnePage } from './get-one.page';

const routes: Routes = [
  {
    path: '',
    component: GetOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetOnePageRoutingModule {}
