import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute,Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Userinfo} from './../../shared/user-info.model';
import {UserService} from './../../shared/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userinfos: Userinfo[];
userid;
  panelOpenState = false;


  constructor(private uS:UserService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.userinfos = data.userinfos;
    });
  }

  delete(userinfo, id:number){
    this.uS.deleteUser(userinfo);
  }

}
