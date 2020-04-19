import { Component, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {CartService} from './../../shared/cart.service';
import {Item} from './../../shared/item.model';
import {ProductService} from './../../shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items:Item[];
id:number;
cartTotal;

  constructor(private cS:CartService,
              private pS:ProductService,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: {items: Item[]}) => {
      this.items = data.items;

      // total price of entire item in the cart
          this.cartTotal = 0;
          this.items.forEach( item =>{
            this.cartTotal += (item.qty*item.price)
          })
    });
  }


  incrementQty(item){
   item.qty +=1;
  return this.cartTotal += item.price

  }
  decrementQty(item){
     item.qty -=1;
     return this.cartTotal -= item.price
  }

delete(item, id:number){
  this.cS.deleteItem(item);
}
amt(item){
  return this.cartTotal -=item.price*item.qty;
}

}
