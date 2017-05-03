import { Item } from "../data/item.interface";
import { Observable } from "rxjs/Rx";

export class ItemService {
    teachersRef: any;
    private items: Item[] = [];
    private favourite: Item[] = [];
    count: number = 0;
    total:number=0;
    carts:any;
    addQuoteToFavorites(item:Item){
        this.items.push(item);
        console.log(this.items);
    }

    removeQuoteFromFavorites(item:Item){
         const position = this.items.indexOf(item);
         this.items.splice(position,1);
    }

    getAllItem(){
        return this.items.slice();
    }

    getCount(){
        return this.count;
    }
    getCarts(){
        return this.items;
    }
    addItemToCarts(item:Item){
        this.items.push(item);
    }
    addCountToCarts(count){
        this.total+= count;
    }
    addToFavourite(item:Item){
        this.favourite.push(item);
        console.log(this.favourite);
    }
    getFavourite(){
        return this.favourite;
    }
    /*getTeachers() {
    return new Observable(observer => {
      this.teachersRef.on("value", snapshot => {
        var tempArr = [];
        snapshot.forEach(function(data) {
          var teacher = {
            name: data.key(),
            position: data.val().stilling
          }
          tempArr.push(teacher);
        });
        observer.next(tempArr);
      }
    });
    }*/
    countOperator(operator){
    if(this.count >= 0){
      this.count += operator;
    }
    if(this.count < 0){
      this.count = 0;
    }
    console.log(this.count);
  }
}