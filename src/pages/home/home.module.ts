import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { SuperTabsModule } from "ionic2-super-tabs/dist";

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    SuperTabsModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
