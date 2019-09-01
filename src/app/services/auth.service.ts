import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';
import { user , UserType } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public type="serveur";
  constructor(private _http:HttpClient) { }
  usertype='local';
  isAuth=false;
  usertypesubject=new Subject<string>();
  authsubject=new Subject<boolean>();
  emitAuthstate(){
    this.authsubject.next(this.isAuth);
  }
  emitusertypesubject(){
    this.usertypesubject.next(this.usertype);
  }

  signout(){
    this.authsubject.next(false);
    this.isAuth=false;
    this.usertype='local';
    this.usertypesubject.next('local');
    localStorage.setItem('logged', 'false');
        localStorage.setItem('type', 'local');
        sessionStorage.setItem('logged', 'false');
        sessionStorage.setItem('type', 'local');

  }
  signInUser(username: string, password: string):Observable<string>{

    let u=new user(username,'','',password,'');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this._http.post<string>('http://restaurant.edl/api/signin',u,httpOptions);

     //this.typeSubject.next("gerent");
     // localStorage.setItem('userType',UserType.serveur.toString());

  }

}
