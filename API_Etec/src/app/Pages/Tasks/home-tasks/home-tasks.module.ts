import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTasksPageRoutingModule } from './home-tasks-routing.module';

import { HomeTasksPage } from './home-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTasksPageRoutingModule
  ],
  declarations: [HomeTasksPage]
})
export class HomeTasksPageModule {}
