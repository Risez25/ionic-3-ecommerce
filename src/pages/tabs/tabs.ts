import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../services/item.service";
import { NavController, NavParams, ModalController, ViewController } from "ionic-angular";
import { Item } from "../../data/item.interface";
import {SuperTabsController} from "ionic2-super-tabs";
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  count:number;
  items:Item[]=[];
  home = 'Home';
  about = 'About';
  profile = 'Profile';
  favourite = 'Favourite';
  search = 'Search';
  showToolbar:boolean=false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    this.itemService.count;
  }
  
  ngOnInit() {
      this.count=this.itemService.getCount()
  }
  gotoCarts(){
    let cartsModal = this.modalCtrl.create('Carts');
    cartsModal.present();
  } 

  gotoFavourite(){
    let favouriteModal = this.modalCtrl.create('Favourite');
    favouriteModal.present();
  } 
  
  
}
