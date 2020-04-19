import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from './../../shared/product.service';
import {Product} from './../../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];
  filteredProducts:Product[];

  productId:number;
  private _searchTerm:string;

  constructor(private pS:ProductService, private router:Router, private route:ActivatedRoute) {}


  ngOnInit():void {
    this.route.data.subscribe((data) => {
      this.products = data.products;
      this.filteredProducts = this.products;
    });
  }


  get searchTerm(): string {
    return this._searchTerm;
  }


  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredProducts = this.filterproducts(value);
  }

filterproducts(searchString: string){
  return this.products.filter(product =>
  product.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
}
}
