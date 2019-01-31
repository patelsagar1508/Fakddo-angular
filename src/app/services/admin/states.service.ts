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
export class StatesService {

  constructor(private http:Http) { }

    getStates(path):Observable<any>{

      return this.http.get(Constant.API+path,Constant.options)
                  .map((res:Response) => res.json())
                  .catch((error:any) => (error || "Server error!"));
    }

   stateCreate(body:any,path:string):Observable<any>{

      return this.http.post(Constant.API+path,body,Constant.options)
                    .map((res:Response) => res.json())
                    .catch((error : any) => throwError(error || "Server Issue"));
  }


  getStatesByID(id:any,path:string):Observable<any>{
    
      return this.http.get(Constant.API+path+id,Constant.options)
                    .map((res : Response) => res.json())
                    .catch( (error : any) => throwError(error || "Server Error!"));

  }


  updateStatebyid(body:any,path:string,id:number):Observable<any>{

      return this.http.put(Constant.API+path+id,body,Constant.options)
                    .map((res:Response) => res.json())
                    .catch((error : any) => throwError(error || "Server Issue"));
  }

}
