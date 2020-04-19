import { Component, OnInit, ViewChild} from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {Observable} from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {Product} from './../../shared/product.model';
import {ProductService} from './../../shared/product.service';

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {
  @ViewChild('productForm', { static: false }) addproductsForm: NgForm;

toggleField:string;
products:Product[];
filteredProducts:Product[];
productId:number;
private _searchTerm:string;

product:Product = {
  productId:null,
  name:null,
  price:null,
  description:null,
  imagePath:null
};

  constructor(private pS:ProductService,
              private router:Router,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.pS.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products;
    });
    this.toggleField = 'addMode';
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

toggle(filter?){
  if(!filter){ filter = "addMode";}
  else{filter = filter;}
  this.toggleField = filter;
}

onSubmit(product:Product){
  if(this.addproductsForm.valid){
    this.pS.addproducts(product);
    window.alert('New Product added');
    this.router.navigate(['product']);
  }
}

onDelete(product, id:number){
  this.pS.deleteProduct(product);
}

onClear(){
  this.addproductsForm.reset();
}

}
