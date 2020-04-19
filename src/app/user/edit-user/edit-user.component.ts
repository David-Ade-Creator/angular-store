import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {Userinfo} from './../../shared/user-info.model';
import {UserService} from './../../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('infoForm', { static: false }) public createUserForm: NgForm;
  userid;
  userinfos:Userinfo;
  newUserinfo:Userinfo;


  userinfo:Userinfo = {
   userid : null,
   fname:null,
   lname:null,
   num:null,
   email:null,
   address:null,
   city:null,
   state:null,
   pcode:null
 };
  constructor(private uS:UserService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
            .subscribe(
              (params: Params) => {
                this.userid = +params['userid'];
                this.userinfo = this.uS.getUser(this.userid);
              }
            );
  }

  onUpdate(userid,newUserinfo):void{
  this.uS.updateUserInfo(userid, newUserinfo);
    this.router.navigate(['profile']);
  }

  onCancel(){
    this.router.navigate(['profile']);
  }

}
