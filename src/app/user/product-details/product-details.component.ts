import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ProductService} from './../../shared/product.service';
import {Product} from './../../shared/product.model';
import {CartService} from './../../shared/cart.service';
import {AuthService} from './../../shared/auth.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId;

    constructor(private pS:ProductService,
                private cS:CartService,
                private route:ActivatedRoute,
                private router: Router,
                private aS:AuthService) {}



      ngOnInit() {
      this.route.params
              .subscribe(
                (params: Params) => {
                  this.productId = +params['productId'];
                  this.product = this.pS.getProduct(this.productId);
                }
              );
            }

      addToCart(product) {
        this.cS.addToCart(product);
        window.alert('Your product has been added to the cart!');
      }

}
