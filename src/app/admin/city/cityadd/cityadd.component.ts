import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { FormControl , Validators, FormGroup} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { AuthService } from '../../../services/auth.service';
import { CommoncrudService } from '../../../services/admin/commoncrud.service';
import { StatesService } from '../../../services/admin/states.service';

@Component({
  selector: 'app-cityadd',
  templateUrl: './cityadd.component.html',
  styleUrls: ['./cityadd.component.css']
})
export class CityaddComponent implements OnInit {


  AddCityForm : FormGroup;
  States:any;
  message:string = '';
  show: boolean = false;

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService,private stateservice:StatesService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate()){
      this.route.navigateByUrl('/admin');
    }


      this.AddCityForm = new FormGroup({"city_name":new FormControl('',Validators.required) , 'state_id' : new FormControl('',Validators.required)});
      this.getstates();
  }


  getstates(){
    let states:Observable<any>;
    const path = 'state/getStates';
    states = this.stateservice.getStates(path);
    states.subscribe(
                (data) => {   if(data.sucess != undefined && data.sucess == false){
                  if(data.message == 'Authentication failed'){
                        this.authService.cleanCache();
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
                });
  }

  citycreate(){
    console.log("tes");
      let response: Observable<any>;
      
      const path = 'city/add';

      const citybody : any = {
        city_name : this.AddCityForm.get('city_name').value,
        state_id : this.AddCityForm.get('state_id').value
      }

            response =  this.commoncrudservice.PostData(citybody,path);
              response.subscribe(
                (data) => {  if(data.success == false){
                                  this.show = true;
                                  this.message = data.message;

                                }else{
                                  this.route.navigateByUrl('/admin/city');
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

                });
  }

}
