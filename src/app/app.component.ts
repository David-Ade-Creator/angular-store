import { Component, OnInit, ViewChild , Input} from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
close() {
  this.sidenav.close();
}
panelOpenState = false;
showLoadingIndicator = true;


constructor(private router:Router,public aS:AuthService){
  this.router.events.subscribe((routerEvent: Event) => {
    if(routerEvent instanceof NavigationStart) {
      this.showLoadingIndicator = true;
    }
    if(routerEvent instanceof NavigationEnd) {
      this.showLoadingIndicator = false;
    }
  });
}

onLogout(){
  this.aS.logout();
}

}
