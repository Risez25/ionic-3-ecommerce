import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cart } from './cart';
import { SuperTabsModule } from "ionic2-super-tabs/dist";

@NgModule({
  declarations: [
    Cart,
  ],
  imports: [
    IonicPageModule.forChild(Cart),
    SuperTabsModule
  ],
  exports: [
    Cart
  ]
})
export class CartModule {}
