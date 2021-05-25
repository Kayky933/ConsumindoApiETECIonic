import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletPageRoutingModule } from './delet-routing.module';

import { DeletPage } from './delet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletPageRoutingModule
  ],
  declarations: [DeletPage]
})
export class DeletPageModule {}
