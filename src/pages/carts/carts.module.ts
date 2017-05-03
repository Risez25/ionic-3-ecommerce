import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Carts } from './carts';
import { SuperTabsModule } from "ionic2-super-tabs/dist";

@NgModule({
  declarations: [
    Carts,
  ],
  imports: [
    IonicPageModule.forChild(Carts),
    SuperTabsModule
  ],
  exports: [
    Carts
  ]
})
export class CartsModule {}
