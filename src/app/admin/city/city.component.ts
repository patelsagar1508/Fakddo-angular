import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {FormGroup , FormControl, Validators } from '@angular/forms';


import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../../services/auth.service';
import { CommoncrudService } from '../../services/admin/commoncrud.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  Cities:any;
  deleteCity:any;
  show:boolean = false;
  message:string = '';

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {
      if(!this.authService.isAuthenticate){
        this.route.navigateByUrl('admin');
      }

      this.getCity();
  }


  getCity(){
    let cities:Observable<any>;
    const path = 'city/getCities';
    cities = this.commoncrudservice.GetAllData(path);
    cities.subscribe(
                (data) => {   if(data.sucess != undefined && data.sucess == false){
                                    if(data.message == 'Authentication failed'){
                                          this.authService.cleanCache();
                                        }
                                    }else{
                                      this.Cities = data.data;
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
