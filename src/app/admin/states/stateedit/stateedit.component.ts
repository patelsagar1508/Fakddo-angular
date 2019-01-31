import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup , FormControl, Validators } from '@angular/forms';


import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../../../services/auth.service';
import { StatesService } from '../../../services/admin/states.service';

@Component({
  selector: 'app-stateedit',
  templateUrl: './stateedit.component.html',
  styleUrls: ['./stateedit.component.css']
})
export class StateeditComponent implements OnInit {

  EditStateForm:FormGroup;
  url_name:any;
  show:boolean;
  message:string = '';

  constructor( private route:Router , private statesservices:StatesService, private authservice:AuthService) { }

  ngOnInit() {

     // console.log(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));

      this.url_name = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if(!this.authservice.isAuthenticate){
        this.route.navigateByUrl('admin');
      }



      this.EditStateForm = new FormGroup({
            'state_name': new FormControl('',Validators.required),
            'id' : new FormControl(''),
            'modified_date': new FormControl(''),
            'created_date':new FormControl('')
      });

      const path = 'state/getStateById/';
      this.statesservices.getStatesByID(this.url_name,path)  .subscribe( data => {
            if(data.sucess == true){
             // console.log(data);
                this.EditStateForm.setValue(data.data);
            }else{
                this.route.navigateByUrl('/admin');
            }
      });



  }

  stateupdate(){

    const path = 'state/update/'
    const id = this.EditStateForm.get('id').value;
    let response : Observable<any>;

    const formbody : any = {
      state_name : this.EditStateForm.get('state_name').value
    };

    response = this.statesservices.updateStatebyid(formbody,path,id);

          response.subscribe(
            (data) => { //if(data.sucess == true){  this.route.navigateByUrl('admin/states')} 
                        if(data.sucess != undefined && data.sucess == false){
                            if(data.message == 'Authentication failed'){
                              this.authservice.cleanCache();
                            }
                        }else{
                          this.route.navigateByUrl('admin/states')
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
