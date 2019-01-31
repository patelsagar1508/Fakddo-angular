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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  EditUserForm: FormGroup;
  EditUserdata:any;
  minDate = new Date();
  message:string = '';
  show: boolean = false;
  
  
  constructor(private router: Router , private authService : AuthService , private usersService: UsersService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate()){
      this.router.navigateByUrl('/admin');
    }

      

    this.EditUserForm = new FormGroup({
        'username': new FormControl("", Validators.compose([
          Validators.required
       ])),
       'password': new FormControl('',this.passwordvalidation),
       'email_id' : new FormControl("", Validators.compose([Validators.required,Validators.pattern("[^ @]*@[^ @]*")])),
       'mobile' : new FormControl("",Validators.required),
       'birthdate' : new FormControl("" , Validators.required),
       'status' : new FormControl("", Validators.required),
       'user_role': new FormControl(3),
    });
  }



  
  userCreate(){
    //console.log(this.EditUserForm);

    const path = 'users/add';
    let response: Observable<any>;

    const UpdateBody: any = {
      username:this.EditUserForm.get('username').value,
      email_id:this.EditUserForm.get('email_id').value,
      password:this.EditUserForm.get('password').value,
      mobile:this.EditUserForm.get('mobile').value,
      role_type:3
    }

    response = this.usersService.userCreate(UpdateBody, path);
            response.subscribe(
              (data)=> {
                    // console.log(data);
                    // console.log( "Error13 Issues!")
                    if(data.success == false){
                      this.show = true;
                      this.message = data.message;

                    }else {
                      this.router.navigateByUrl('/admin/users');
                    }
              },
              (error) => {
                
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

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 2 || formcontrol.value.length > 9) {
       return {"txtpsw" : true};
    }
 }

}
