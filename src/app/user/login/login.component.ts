import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm', { static: false }) loginForm: NgForm;

    isLoggedin = false;

  constructor(private router:Router,
              private aS:AuthService) { }

  ngOnInit(): void {}

onLogin(loginForm){
  if (this.loginForm.valid){
  this.aS.loginUser(loginForm).then(
    (res) => {
      this.isLoggedin = true;
      console.log(this.isLoggedin);
      console.log("logged in");
      this.router.navigate(["/home"]);
    }, (err) => {
      this.isLoggedin = false;
      console.log(this.isLoggedin);
      window.alert("password incorrect or check if email address is correct");
    }
  );
}
}


}
