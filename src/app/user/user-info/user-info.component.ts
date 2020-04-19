import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {Userinfo} from './../../shared/user-info.model';
import {UserService} from './../../shared/user.service';
import {CanComponentDeactivate} from './user-can-deactivate-guard.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, CanComponentDeactivate {
@ViewChild('infoForm', { static: false }) public createUserForm: NgForm;
userid;
userinfos:Userinfo;


 userinfo:Userinfo = {
   userid:null,
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



  ngOnInit(): void {}


onSubmit(userinfo){
  if (this.createUserForm.valid){
  const newUserinfo:Userinfo = Object.assign({},this.userinfo);
  this.uS.addUserinfo(newUserinfo);
  this.createUserForm.reset();
  window.alert("new profile has been created");
}
}

reset(){
  this.createUserForm.reset();
}


  confirm(){
      return confirm('Are you sure you want to discard all changes?');
    }

}
