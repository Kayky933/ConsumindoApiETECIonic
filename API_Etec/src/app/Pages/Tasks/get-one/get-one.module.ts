import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetOnePageRoutingModule } from './get-one-routing.module';

import { GetOnePage } from './get-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetOnePageRoutingModule
  ],
  declarations: [GetOnePage]
})
export class GetOnePageModule {}
