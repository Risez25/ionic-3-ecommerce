import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Search } from './search';
import { SuperTabsModule } from "ionic2-super-tabs/dist";

@NgModule({
  declarations: [
    Search,
  ],
  imports: [
    IonicPageModule.forChild(Search),
    SuperTabsModule
  ],
  exports: [
    Search
  ]
})
export class SearchModule {}
