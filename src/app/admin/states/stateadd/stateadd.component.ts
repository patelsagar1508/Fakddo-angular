import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { FormControl , Validators, FormGroup} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { AuthService } from '../../../services/auth.service';
import { StatesService } from '../../../services/admin/states.service';

@Component({
  selector: 'app-stateadd',
  templateUrl: './stateadd.component.html',
  styleUrls: ['./stateadd.component.css']
})
export class StateaddComponent implements OnInit {


  AddStateForm : FormGroup;
  message:string = '';
  show: boolean = false;



  constructor(private router:Router, private authservice:AuthService,private  stateservice:StatesService) { }

  ngOnInit() {

      if(!this.authservice.isAuthenticate()){
        this.router.navigateByUrl('/admin');
      }


        this.AddStateForm = new FormGroup({"statename":new FormControl('',Validators.required)});


  }

  statecreate(){

    let response: Observable<any>;
    
    const path = 'state/add';

    const statebody : any = {
      state_name : this.AddStateForm.get('statename').value
    }


    response = this.stateservice.stateCreate(statebody,path);

            response.subscribe(
              (data) => {  if(data.success == false){
                                this.show = true;
                                this.message = data.message;

                              }else{
                                this.router.navigateByUrl('/admin/states');
                              }
                            },
              (error) => {console.log(error +"Error"); }
              
            );

  }



}
