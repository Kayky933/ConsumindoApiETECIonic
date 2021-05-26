import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTasksPage } from './home-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTasksPageRoutingModule {}
