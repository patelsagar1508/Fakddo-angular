import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  
  
  public global = environment;
  
  
  constructor() { }

  getToken(): Observable<any> {
    return window.localStorage['token'];

  }

  getUsername(): Observable<any> {
    return window.localStorage['username'];

  }

  saveToken(token: String) {
    if (!token || token === "undefined" || token === null) {
      return;
    }

    return window.localStorage['token'] = token;
  }

  saveuserID(id: number) {
    if (!id || id == undefined || id === null) {
      return;
    }

    return window.localStorage['user_id'] = id;
  }

  saveuserName(username: string) {
    if (!username || username == undefined || username === null) {
      return;
    }

    return window.localStorage['username'] = username;
  }

  

  destroyToken() {

    window.localStorage.removeItem('token');
  }

  setReferral(referral: string) {

    return window.localStorage['referral'] = referral;
  }

  getReferral() {

    return window.localStorage['referral'];
  }

  destroyReferral() {

    window.localStorage.removeItem('referral');
  }

  setReferred(referral: string) {

    return window.localStorage['referred'] = referral;
  }

  getReferred() {

    return window.localStorage['referred'];
  }

  destroyReferred() {

    window.localStorage.removeItem('referred');
  }

}
