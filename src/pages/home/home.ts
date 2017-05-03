import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemService } from "../../services/item.service";
import { Item } from "../../data/item.interface";
import item from "../../data/item";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home implements OnInit{
  itemCollection:{category:String,image_category:any,items:Item[]}[];;
  item:Item;
  queryText:any;
  test:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService
    ) {
    console.log(this.itemCollection);
  }

  ngOnInit() {
    this.itemCollection = item;
    console.log(this.itemCollection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  gotoCart(item){
    this.navCtrl.push('Cart',{
      item:item.items
    });
  }

  updateSchedule(input){
    //if(!input) this.assignCopy(); //when nothing has typed
   this.itemCollection = Object.assign([], this.item).filter(
      item => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1
   )
  }
  assignCopy(){
    this.itemCollection = Object.assign([], this.item);
  }
}
