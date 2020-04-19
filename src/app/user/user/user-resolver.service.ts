import {Injectable} from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Userinfo} from './../../shared/user-info.model';
import {UserService} from './../../shared/user.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Injectable()
export class UserResolverService implements Resolve<Userinfo[]> {

  constructor(private uS:UserService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Userinfo[]>{
    return this.uS.getUsers().pipe(
      take(1),
      map((userinfo: Userinfo[]) => userinfo));
  }
}
