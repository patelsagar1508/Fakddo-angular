import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UsersService } from '../../services/admin/users.service';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  currentUser:any = [];
  username:any = '';


  constructor( private router: Router , private usersService : UsersService , public authService:AuthService ) { }

  ngOnInit() {
    //console.log(this.authService.getUsername());
    
      this.username = this.authService.getUsername();
  }


  logout(){

    this.authService.cleanCache();

    let logoutUser: Observable<any>;
    const path = 'users/logout';
    const userdata = { 'userId' : window.localStorage['user_id']};
    logoutUser = this.usersService.userLogout(path,userdata);
    logoutUser.subscribe(

        (data) => { this.router.navigate(['/admin']); }

    )
  }

}
