import { Headers, RequestOptions } from '@angular/http';


import { StorageType } from 'angular-persistence';
import { from } from 'rxjs';



export class Constant {
    /**
     * LOCAL CONSTANT
     */
    // public static API = 'http://localhost:50327/api';
    /**
     * QA CONSTANT
     */
    // public static API = '';
    /**
     * UAT CONSTANT
     */
    // public static API = '';
    /**
     * PROD CONSTANT
     */

    

    public static API = 'http://192.168.1.76:8000/';
    private static headers = new Headers({ 'Content-Type': 'application/json'  ,  'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',"preflightContinue": true ,'Authorization' : window.localStorage['token'] ,'access-id' : window.localStorage['user_id']  });
    public static options = new RequestOptions({ headers: Constant.headers });
    public static StorageType = StorageType.LOCAL;
    public static StorageExpirationAfter = 7200000;
    public static NameSpaceKey = 'org.myApplication.sessionKey';
}
