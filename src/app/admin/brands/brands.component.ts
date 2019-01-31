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
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  Brands:any;
  deleteBrands:any;

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate){
      this.route.navigateByUrl('admin');
    }

    this.getBrands();
  }

  getBrands(){
    let brands:Observable<any>;
    const path = 'brand/getBrands';
    brands = this.commoncrudservice.GetAllData(path);
    brands.subscribe(
                (data) => { console.log(data.data);   this.Brands = data.data },
                (error) => { console.log(error); });

  }

}
