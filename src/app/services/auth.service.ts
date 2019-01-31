import { Injectable, Injector } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import { JwtService } from '../services/jwt.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_SESSION = new BehaviorSubject<User>(null);
  $USER_SESSION = this.USER_SESSION.asObservable();

  constructor(private jwtService: JwtService, private injector: Injector , private router: Router) { }

  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public setAuthUser(data) {
    // console.log("data");
    
    // console.log(data);
    
    const {token, user} = data;

    // console.log("======================");
    
    // console.log(token);
    // console.log(user);
    // console.log(user.id);

    if (!token || !user) {
      this.USER_SESSION.next(null);
      return;
    }

    this.USER_SESSION.next(user);
    this.jwtService.saveToken(token);
    this.jwtService.saveuserID(user.id);
    this.jwtService.saveuserName(user.username);
  }

  public updateAuthUser(user) {

    if (!user) {
      this.USER_SESSION.next(null);
      return;
    }

    this.USER_SESSION.next(user);

  }


  public getUsername(){
      
    if (this.jwtService.getUsername()) {
      return this.jwtService.getUsername();
    }
    this.USER_SESSION.next(null);
   return;

 }

  public isAuthenticate(){
      
     if (this.jwtService.getToken()) {
       return true;
     }
     this.USER_SESSION.next(null);
    return;

  }

  public cleanCache() {

     this.jwtService.destroyToken();
    this.jwtService.destroyReferral();
     this.jwtService.destroyReferred();
     this.USER_SESSION.next(null);
     
     this.logoutAPI();

  }

  async logoutAPI() {


    await this.delay(500);
    this.router.navigateByUrl('/admin');

    // this.apiService = this.injector.get(APIService);
    // return this.apiService.get(`/user/logout`)
    //   .map(data => data);

  }

  async logoutAuthUser() {

    if(this.isAuthenticate()){

      await this.logoutAPI().catch((err) => {
        console.log(err);
      });

    }

    this.cleanCache();

    await this.delay(500);
    this.router.navigateByUrl('/');

  }
}
