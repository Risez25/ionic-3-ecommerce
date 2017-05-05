import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { ItemService } from "../../services/item.service";

/**
 * Generated class for the Details page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {
  count:number;
  item:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService,
    private toastCtrl: ToastController,
    public event: Events) {
    this.item = this.navParams.get('item');
    this.count =this.itemService.getCount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
    
  }

  countOperator(operator){
    this.itemService.countOperator(operator);
    this.count = this.itemService.count;
  }
  addToCarts(item,count){
    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.itemService.addItemToCarts(item);
    this.itemService.addCountToCarts(count);
  }

  addToFavourite(item){
    let toast = this.toastCtrl.create({
      message: 'Item added to wishlist',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    //this.event.publish('user:created', item);
    this.itemService.addToFavourite(item);
  }
  
}
