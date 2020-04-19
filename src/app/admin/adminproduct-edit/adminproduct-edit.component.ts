import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Product} from './../../shared/product.model';
import {ProductService} from './../../shared/product.service';

@Component({
  selector: 'app-adminproduct-edit',
  templateUrl: './adminproduct-edit.component.html',
  styleUrls: ['./adminproduct-edit.component.css']
})
export class AdminproductEditComponent implements OnInit {
  @ViewChild('updateForm', { static: false }) updateForm: NgForm;
  products:Product[];
  newProduct:Product;
  productId;

  product:Product = {
    productId:null,
    name:null,
    price:null,
    description:null,
    imagePath:null
  };

  constructor(private pS:ProductService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
       .subscribe
         (parameterMap => {
           this.productId = +parameterMap.get('productId');
           this.product = this.pS.getProduct(this.productId);
         });
  }


onUpdate(product,newProduct){
  if(this.updateForm.valid){
    this.pS.updateProduct(product,newProduct);
      this.router.navigate(['/admin']);
  }
}
}
