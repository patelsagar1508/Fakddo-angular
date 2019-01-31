import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { LoginService } from '../../services/admin/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService , AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message:any = {};
  data: any = [];
  show: boolean = false;


  constructor(private LoginService: LoginService , private router: Router , private authService : AuthService ) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'txtUser': new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
     ])),
      'txtpsw': new FormControl(
        '',this.passwordvalidation)
    });


    if(this.authService.isAuthenticate()){
      this.router.navigateByUrl('/admin/dashboard');
    }

  }


  requestLogin() {
    
    const path = 'users/login';
    let response: Observable<any>;

    const loginBody: any = {
      email: this.loginForm.get('txtUser').value,
      password: this.loginForm.get('txtpsw').value,
    }
    response = this.LoginService.Request(loginBody, path);

  // /  console.log(response);

    response.subscribe(
      data => {
      //  console.log(data.token);
        this.authService.setAuthUser(data);
       // console.log("User is logged in");

        
        this.router.navigateByUrl('/admin/dashboard');
      },
      error => {
        // this.data = JSON.parse(JSON.stringify(error._body));
        // this.message =  this.data;
        // console.log(this.message.message);
        this.show = true;
       
       
        //console.log('error: ' + JSON.stringify(error));
       
      }
    );
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 2 || formcontrol.value.length > 9) {
       return {"txtpsw" : true};
    }
 }

  

}
