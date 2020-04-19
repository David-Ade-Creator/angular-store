import {Injectable} from '@angular/core';
import {CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export interface CanComponentDeactivate{
  confirm(): boolean;
}

@Injectable()
export class UserCanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {


constructor(){}
  canDeactivate(
    component: CanComponentDeactivate,
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | boolean {
  return component.confirm();
  }
}
