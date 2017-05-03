import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ItemService } from "../../services/item.service";
import { Item } from "../../data/item.interface";

/**
 * Generated class for the Carts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carts',
  templateUrl: 'carts.html',
})
export class Carts {
  items: Item[] =[];
  count:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private itemService:ItemService,public viewCtrl: ViewController) {
    this.items = this.itemService.getCarts();
    this.count = this.itemService.getCount();
    console.log(this.items);
    console.log(this.count);
  }
   dismiss() {
    this.viewCtrl.dismiss();
  }
 

}
