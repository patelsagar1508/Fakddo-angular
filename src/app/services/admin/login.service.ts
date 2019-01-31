import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

import { Constant } from '../classes/Constant';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) {}
  Request(body: any, path: string): Observable<any> { 

    
   
    
     return this.http.post(Constant.API +  path, body, Constant.options) // ...using post request
             .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
             .catch((error: any) => throwError(error || 'Server error')); // ...errors if any


            
  }
}
