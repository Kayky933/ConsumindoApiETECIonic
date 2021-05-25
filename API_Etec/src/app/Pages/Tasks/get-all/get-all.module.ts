import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetAllPageRoutingModule } from './get-all-routing.module';

import { GetAllPage } from './get-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAllPageRoutingModule
  ],
  declarations: [GetAllPage]
})
export class GetAllPageModule {}
