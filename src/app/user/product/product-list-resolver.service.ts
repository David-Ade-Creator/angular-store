import {Injectable} from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Product} from './../../shared/product.model';
import {ProductService} from './../../shared/product.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Injectable()
export class ProductListResolverService implements Resolve<Product[]> {

  constructor(private pS:ProductService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Product[]>{
    return this.pS.getProducts().pipe(
      take(1),
      map((product: Product[]) => product));
  }

}
