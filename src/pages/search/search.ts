import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemService } from "../../services/item.service";
import { Item } from "../../data/item.interface";
import { Items } from "../../data/items.interface";
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  shoes:boolean;
  shirt:boolean;
  hood:boolean;
  pants:boolean;
  test: any;
  items: Item[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService) {
    this.shoes =true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

   searchAll(search){
     this.items =[];
     this.items =  this.itemService.filterAllItems(search);
     console.log(this.items);
  }

  gotoDetail(items){
    this.navCtrl.push('Details',{
      item:items
    })
  }
}
