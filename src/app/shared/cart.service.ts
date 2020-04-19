import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private items: Item[] = [];
totalitemincart;

  constructor() {}

addToCart(product){
  this.items.push({
    name: product.name,
    description: product.description,
    price: product.price,
    imagePath: product.imagePath,
   qty: 1
  })
}


getItems():Observable<Item[]>{
  let items = new Observable<Item[]>(observer => {
    setTimeout(() => {
      observer.next(this.items);
    }, 2000);
  });
  return items;
}

itemincart(){
  this.totalitemincart = this.items?.length;
  return this.totalitemincart;
}

clearCart(){
  this.items = [];
  return this.items;
}

deleteItem(id:number){
  this.items.splice(id, 1);
}

}
