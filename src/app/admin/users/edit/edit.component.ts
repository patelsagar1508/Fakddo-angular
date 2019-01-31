import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/admin/users.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  EditUserForm: FormGroup;
  EditUserdata:any;
  minDate = new Date();
  url_name :any;
  show:boolean = false;
  message:string = '';


  constructor(private router: Router , private authService : AuthService , private usersService: UsersService) { }

  ngOnInit() {


    this.url_name = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    if(!this.authService.isAuthenticate()){
      this.router.navigateByUrl('/admin');
    }

      

    this.EditUserForm = new FormGroup({
        'username': new FormControl("", Validators.compose([
          Validators.required
       ])),
       'email_id' : new FormControl("", Validators.compose([Validators.required,Validators.pattern("[^ @]*@[^ @]*")])),
       'id': new FormControl("", Validators.required),
       'user_image' : new FormControl(""),
       'mobile' : new FormControl("",Validators.required),
       'birthdate' : new FormControl("" , Validators.required),
       'status' : new FormControl("", Validators.required),
       'user_role': new FormControl("",Validators.required),
    });

    let path = 'users/getUserById/';

    this.usersService.getUserdata(path,this.url_name)
    .subscribe( data => {
      if(data.sucess == true){
        this.EditUserForm.setValue(data.data);
     }else{
        this.router.navigateByUrl('/admin');
      }

   
      
    });

  }

  updateUser(){
    //console.log(this.EditUserForm.get('id').value);

    const path = 'users/update/';
    let response: Observable<any>;

    const UpdateBody: any = {
      username:this.EditUserForm.get('username').value,
      email_id:this.EditUserForm.get('email_id').value,
      mobile:this.EditUserForm.get('mobile').value,
      role_type:3
    }

    response = this.usersService.userUpdate(UpdateBody, path,this.EditUserForm.get('id').value);
            response.subscribe(
              (data)=> {
                   // console.log(data);
              },
              (error) => {
                if(error.status == 403)
                this.show = true;
                if(error.status == 403){
                  const result = JSON.parse(error._body);
                  if(result.sucess == false){this.message = result.message;}
                  
                }else if(error.message != undefined && error.message != ''){
                  this.message = error.message;
                }else{
                  this.message = "Server issue please try again";
                }
              }
              
            )



  }



}
