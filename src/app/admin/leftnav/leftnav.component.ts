import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  routename:string = '';


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //console.log("routes");
    //console.log(this.activatedRoute.snapshot.url); // array of states
    //console.log(this.activatedRoute.snapshot.url[1].path); 
    this.routename = this.activatedRoute.snapshot.url[1].path;

    
  }


}
