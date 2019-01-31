import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { FormControl , Validators, FormGroup} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { AuthService } from '../../../services/auth.service';
import { CommoncrudService } from '../../../services/admin/commoncrud.service';


@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']
})
export class CategoryaddComponent implements OnInit {
  AddCategoryForm : FormGroup;
  constructor(private route:Router , private authService: AuthService , private commoncrudservice : CommoncrudService) { }

  ngOnInit() {

    if(!this.authService.isAuthenticate()){
      this.route.navigateByUrl('/admin');
    }


      this.AddCategoryForm = new FormGroup({"category_name":new FormControl('',Validators.required) , 'parent_id' : new FormControl('',Validators.required), 'icon_path' : new FormControl('',Validators.required) , 'isTrending' : new FormControl('',Validators.required), 'created_by' : new FormControl('',Validators.required) , 'modified_by' : new FormControl('',Validators.required), 'status' : new FormControl('',Validators.required) });
    }

}
