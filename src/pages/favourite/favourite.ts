import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController } from 'ionic-angular';
import { Item } from "../../data/item.interface";
import { ItemService } from "../../services/item.service";

/**
 * Generated class for the Favourite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class Favourite implements OnInit {
  vehicles= [];
  favourites:Item[]=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService,
     public event: Events,
     public viewCtrl: ViewController) {
    
  }
  
  ngOnInit() {
    
  }
  
  ionViewDidEnter(){
     this.favourites = this.itemService.getFavourite();
  }
  ionViewWillEnter(){
    this.event.subscribe('user:created',(data) =>{
      console.log(data);
    });
   
    //console.log( this.vehicles);
    console.log( "ionViewWillEnter");
    
  }
  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Favourite');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
