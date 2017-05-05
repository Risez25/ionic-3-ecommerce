import { Item } from "../data/item.interface";
import { Items } from "../data/items.interface";
import item from "../data/item";
import item_all from "../data/item_all";
export class ItemService {
    teachersRef: any;
    item_search :{id:string,name:string, price:number,description:string,image:string } [];
    private item_category : Items [] =[];
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
        return item;
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

    filterItems(searchTerm){
        this.item_category = item;
        return this.item_category.filter((item) => {
            console.log(searchTerm);
            return item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }

    filterAllItems(search){
        return item_all.filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });     
    }
   
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