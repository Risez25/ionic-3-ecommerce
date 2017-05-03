import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { ItemService } from "../services/item.service";
import {FavouritePipe } from "../pipes/favourite";
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritePipe
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    SwipeCardsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
