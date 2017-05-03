import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Cart page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =  this.navParams.get('item');
    console.log(this.items);
  }

  ionViewDidLoad() {
  }
  gotoDetails(items){
    this.navCtrl.push('Details',{
      item:items
    })
  }
}
