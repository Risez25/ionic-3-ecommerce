import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemService } from "../../services/item.service";
import { Item } from "../../data/item.interface";
import item from "../../data/item";
import { Items } from "../../data/items.interface";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home implements OnInit{
  itemCollection:Items[]=[];
  item:Item;
  queryText:any;
  test:any;
  searchTerm: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private itemService:ItemService
    ) {
    console.log(this.itemCollection);
  }

  ngOnInit() {
    this.itemCollection = this.itemService.getAllItem();
    console.log(this.itemCollection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }
  async setFilteredItems(input) {
        this.itemCollection = await this.itemService.filterItems(input);
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
