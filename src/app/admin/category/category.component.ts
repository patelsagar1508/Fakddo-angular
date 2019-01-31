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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Categories:any;
  deleteCategory:any;

  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate){
      this.route.navigateByUrl('admin');
    }

    this.getCategory();

  }


  getCategory(){

    let category:Observable<any>;
    const path = 'category/getCategories';
    category = this.commoncrudservice.GetAllData(path);
    category.subscribe(
                (data) => {  if(data.sucess != undefined && data.sucess == false){
                  if(data.message == 'Authentication failed'){
                        this.authService.cleanCache();
                      }
                  }else{
                    this.Categories = data.data
                  }   },
                (error) => { console.log(error); });

  }
}
