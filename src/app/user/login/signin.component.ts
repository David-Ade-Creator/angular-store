import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './../../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('signupForm', {static:false}) signupForm:NgForm;

  isSignin = false;

  constructor(private router:Router,
              private aS:AuthService) { }

  ngOnInit(): void {}



  onSignup(signupForm){
    if (this.signupForm.valid){
    this.aS.createUser(signupForm).then(
      (success) => {
        this.isSignin = true;
        console.log(this.isSignin);
        this.router.navigate(["/login"]);
        console.log("signed in");
      }, (error) => {
        this.isSignin = false;
        console.log(this.isSignin);
        window.alert("email already in use");
      }
    );
  }
  }

}
