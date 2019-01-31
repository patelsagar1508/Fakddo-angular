import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/admin/users.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService , AuthService]
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  deleteusers: Array<User>;
  show:boolean = false;
  message:string = '';

  constructor( private router: Router , private authService : AuthService , private usersService: UsersService) { }

  ngOnInit() {


      if(!this.authService.isAuthenticate()){
        this.router.navigateByUrl('/admin');
      }

      this.getusers();
  }


  getusers(){
    let users: Observable<any>;
    const path = 'users/getUsers';
    users = this.usersService.GetUsers(path);
    users.subscribe(
      (data) => {
        //console.log(data);
        if(data.sucess != undefined && data.sucess == false){
            if(data.message == 'Authentication failed'){
              this.authService.cleanCache();
            }
        }else{
          //console.log("123"); return false;
          this.users = data.data;
        }
         
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
    );
   }

   delete(id){
    
    let deleteusers: Observable<any>;
    const path = 'users/delete/';
    deleteusers = this.usersService.DeleteUsers(path,id);
    deleteusers.subscribe(
        (data) => {
         // console.log("data");
         // console.log(data);
         
         //this.router.navigateByUrl('/admin/users');
         this.router.navigate([this.router.url]);
        },
        (error) => {
           console.log("Error: ",error);
        }
    );

   
  }

}
