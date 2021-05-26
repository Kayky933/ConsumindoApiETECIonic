import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetOnePageRoutingModule } from './get-one-routing.module';

import { GetOnePage } from './get-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetOnePageRoutingModule,  
    ReactiveFormsModule,
  ],
  declarations: [GetOnePage]
})
export class GetOnePageModule {}
