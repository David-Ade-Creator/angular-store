import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  constructor(private router: Router,
              private aS:AuthService) { }

              canActivate() {
                if(localStorage.getItem('token') == "7PjNil") {
                   return true;
                } else {
                   this.router.navigate(['/login']);
                   return false;
               }
            }
}
