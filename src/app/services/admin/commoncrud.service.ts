import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

import { Constant } from '../classes/Constant';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CommoncrudService {

  constructor(private http:Http) { }


  GetAllData(path:string): Observable<any>{

      return this.http.get(Constant.API+path,Constant.options)
                    .map((res:Response) => res.json())
                    .catch((error : any) => throwError(error || "Server Isssue!"));
  }

  GetDataByID(path:string,id:number):Observable<any>{

      return this.http.get(Constant.API + path + id,Constant.options)
                  .map((res:Response) => res.json())
                  .catch((error : any) => throwError(error || "Server Isssue!"));

  }

  PostData(body:any,path:string):Observable<any>{

      return this.http.post(Constant.API+path,body,Constant.options)
                  .map((res:Response) => res.json())
                  .catch((error : any) => throwError(error || "Server Isssue!"));
  }

  UpdateData(body:any,path:string,id:number):Observable<any>{

      return this.http.put(Constant.API+path+id,body,Constant.options)
                  .map((res:Response) => res.json())
                  .catch((error : any) => throwError(error || "Server Isssue!"));
  }

  DeleteDataByID(body:any,path:string,id:number):Observable<any>{

      return this.http.put(Constant.API+path+id,body,Constant.options)
                  .map((res:Response) => res.json())
                  .catch((error : any) => throwError(error || "Server Isssue!"));
  }

}
