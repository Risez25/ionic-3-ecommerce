import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favourite } from './favourite';
import { SuperTabsModule } from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    Favourite,
  ],
  imports: [
    IonicPageModule.forChild(Favourite),
    SuperTabsModule
  ],
  exports: [
    Favourite
  ]
})
export class FavouriteModule {}
