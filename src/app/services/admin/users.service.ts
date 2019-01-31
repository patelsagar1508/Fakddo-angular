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
export class UsersService {

  constructor(private http: Http) { }


      GetUsers(path: string): Observable<any> { 
        
        return this.http.get(Constant.API +  path, Constant.options) // ...using post request
                .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error: any) => throwError(error || 'Server error')); // ...errors if any
      }

      DeleteUsers(path:string,id:number ): Observable<any>{

        return this.http.get(Constant.API +  path+id,  Constant.options)
                .map((res:Response) => res.json())
                .catch((error : any ) => throwError(error || 'server error'));
      }

     
      getUserdata(path:string,user_id:number):Observable<any>{

        return this.http.get(Constant.API + path + user_id , Constant.options)
                  .map((res:Response ) => res.json())
                  .catch((error : any) => throwError(error || "Server issue!"));
      }

      userLogout(path:string,body:any):Observable<any>{

          return this.http.post(Constant.API+ path  , body,Constant.options)
                    .map((res:Response) => res.json())
                    .catch((error : any) => throwError(error || "Server Issues!"));

      }

      getCurrentUser():Observable<any>{

        return this.http.get(Constant.API+'users/getUserById/'+window.localStorage['user_id'],Constant.options)
                      .map((res:Response) => res.json())
                      .catch((error : any) => throwError(error || "Server Issues!"));
      }


      userUpdate(body:any,path:string,id:number):Observable<any>{

          return this.http.put(Constant.API+path+id,body,Constant.options)
                        .map((res:Response) => res.json())
                        .catch((error : any) => throwError(error || "Server Issue"));
      }

      userCreate(body:any,path:string):Observable<any>{

        return this.http.post(Constant.API+path,body,Constant.options)
                      .map((res:Response) => res.json())
                      .catch((error : any) => throwError(error || "Server Issue"));
    }
}
