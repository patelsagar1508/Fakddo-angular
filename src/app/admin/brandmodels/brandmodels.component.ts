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
  selector: 'app-brandmodels',
  templateUrl: './brandmodels.component.html',
  styleUrls: ['./brandmodels.component.css']
})
export class BrandmodelsComponent implements OnInit {

  Brandmodels:any;
  deleteBrandmodel:any;

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate){
      this.route.navigateByUrl('admin');
    }

    this.getBrandmodels();
  }

  getBrandmodels(){
    let brandmodel:Observable<any>;
    const path = 'brandModel/getBrandModels';
    const postbody : any = {platform:"admin"};
    brandmodel = this.commoncrudservice.PostData(postbody,path);
   // brandmodel = this.commoncrudservice.GetAllData(path);
    brandmodel.subscribe(
                (data) => { console.log(data.data);   this.Brandmodels = data.data },
                (error) => { console.log(error); });

  }
}
