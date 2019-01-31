import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../../services/auth.service';
import { StatesService } from '../../services/admin/states.service';
import { state } from '@angular/animations';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  States:any;
  deleteStates:any;
  show:boolean = false;
  message:string = '';

  constructor(private route:Router, private authservice:AuthService,private stateservice:StatesService) { }

  ngOnInit() {

      if(!this.authservice.isAuthenticate){
        this.route.navigateByUrl('admin');
      }

      this.getStates();
  }


  getStates(){

    let states:Observable<any>;
    const path = 'state/getStates';
    states = this.stateservice.getStates(path);
    states.subscribe(
                (data) => {   if(data.sucess != undefined && data.sucess == false){
                  if(data.message == 'Authentication failed'){
                        this.authservice.cleanCache();
                      }
                  }else{
                    this.States = data.data;
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
}
