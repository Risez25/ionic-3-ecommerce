import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Details } from './details';
import { SuperTabsModule } from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    Details,
  ],
  imports: [
    IonicPageModule.forChild(Details),
    SuperTabsModule
  ],
  exports: [
    Details
  ]
})
export class DetailsModule {}
