import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { About } from './about';
import { SuperTabsModule } from "ionic2-super-tabs/dist";

@NgModule({
  declarations: [
    About,
  ],
  imports: [
    IonicPageModule.forChild(About),
    SuperTabsModule
  ],
  exports: [
    About
  ]
})
export class AboutModule {}
