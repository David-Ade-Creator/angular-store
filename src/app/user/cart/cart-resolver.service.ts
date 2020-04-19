import {Injectable} from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Item} from './../../shared/item.model';
import {CartService} from './../../shared/cart.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Injectable()
export class CartResolverService implements Resolve<Item[]> {

  constructor(private cS:CartService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Item[]>{
    return this.cS.getItems().pipe(
      take(1),
      map((item: Item[]) => item));
  }
}
