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
  selector: 'app-cityedit',
  templateUrl: './cityedit.component.html',
  styleUrls: ['./cityedit.component.css']
})
export class CityeditComponent implements OnInit {

  EditCityForm : FormGroup;
  url_name:any;
  States:any;
  message:string = '';
  show: boolean = false;

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService,private stateservice:StatesService) { }

  ngOnInit() {
    this.url_name = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(!this.authService.isAuthenticate()){
      this.route.navigateByUrl('/admin');
    }


      this.EditCityForm = new FormGroup({"city_name":new FormControl('',Validators.required) , 'state_id' : new FormControl('',Validators.required) , 'id' : new FormControl('')});
      this.getstates();
      

    const path = 'city/getCityById/';
    this.commoncrudservice.GetDataByID(path,this.url_name)  .subscribe( data => {
          if(data.sucess == true){
              this.EditCityForm.setValue(data.data);
          }else{
              this.route.navigateByUrl('/admin');
          }
    });
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

  cityupdate(){
   
      let response: Observable<any>;
      
      const path = 'city/update/';
      const id = this.EditCityForm.get('id').value;
      const citybody : any = {
        city_name : this.EditCityForm.get('city_name').value,
        state_id : this.EditCityForm.get('state_id').value
      }

            response =  this.commoncrudservice.UpdateData(citybody,path,id);
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
