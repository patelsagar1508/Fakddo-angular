import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


 

import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 

  constructor( private router: Router , private authService : AuthService ) { }

  ngOnInit() {
 
    if(!this.authService.isAuthenticate()){
      this.router.navigateByUrl('/admin');
    }
    
  }


  
}
