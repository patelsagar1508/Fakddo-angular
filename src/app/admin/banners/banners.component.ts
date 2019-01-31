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
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  Banners:any;
  deleteCity:any;
  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate){
      this.route.navigateByUrl('admin');
    }

    this.getBanners();

  }

  getBanners(){
    let banners:Observable<any>;
    const path = 'banner/getBanners';
    banners = this.commoncrudservice.GetAllData(path);
    banners.subscribe(
                (data) => { console.log(data.data);   this.Banners = data.data },
                (error) => { console.log(error); });
  }

}
