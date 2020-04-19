import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Product} from './product.model';

@Injectable()
export class ProductService{

  constructor(){}

private products: Product[] = [
    new Product(1,'Adiddas',4600, 'Smooth and sleek to feet', 'https://images.journeys.com/images/products/1_395942_ZM_WHITE_ALT1.JPG'),
    new Product(2,'Nike AirForce 1',6580, 'Smooth and sleek to feet', 'https://photos.queens.cz/queens/old/large/nike-air-force-1-07-1136_1.jpg'),
    new Product(3,'Puma',3000, 'Smooth and sleek to feet', 'https://images-na.ssl-images-amazon.com/images/I/719lGRxnoNL._AC_UY500_.jpg'),
    new Product(4,'Converse',2000, 'Smooth and sleek to feet', 'https://i.ebayimg.com/images/g/PUcAAOSwklBartr-/s-l300.jpg'),
    new Product(5,'Men Sandals',1500, 'Smooth and sleek to feet', 'http://www.sandalsmanufacturers.com/wp-content/uploads/2018/08/sandals-1-5-300x300.jpg'),
    new Product(6,'Chucky Boots',3500, 'Smooth and sleek to feet', 'https://dsw.scene7.com/is/image/DSWShoes/P191182_visual-filter-booties'),
    new Product(7,'Puma',3000, 'Smooth and sleek to feet', 'https://images-na.ssl-images-amazon.com/images/I/719lGRxnoNL._AC_UY500_.jpg'),
    new Product(8,'Adiddas',4600, 'Smooth and sleek to feet', 'https://images.journeys.com/images/products/1_395942_ZM_WHITE_ALT1.JPG'),
  ];


getProducts():Observable<Product[]> {
      let products = new Observable<Product[]>(observer => {
             setTimeout(() => {
                 observer.next(this.products);
             }, 2000);
      });

      return products;
  }

  //for index
  getProduct(productId:number | string){
    return this.products.find(product => product.productId == productId);
  }

  addproducts(product:Product){
    this.products.push(product);
  }

  updateProduct(productId:number,newProduct : Product){
    this.products[productId] = newProduct;
  }


  deleteProduct(id:number){
    this.products.splice(id, 1);
  }

  }
