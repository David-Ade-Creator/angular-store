
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor (private aS: AuthService, private router: Router) { }
async canActivate(): Promise<boolean> {
    const authenticatedUser = await this.aS.getUser();
    const authenticated = !!authenticatedUser;
    if (!authenticated) {
      this.router.navigate(['/signin']);
    }
    return authenticated;
  }
}
