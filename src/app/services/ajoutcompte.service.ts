import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AjoutcompteService {
  constructor(private _http:HttpClient) { }

   signup(User : user):Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this._http.post<boolean>('http://127.0.0.1:8000/api/inscription',User,httpOptions);
   }


   modifiermdp(username,password){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let data={
      "username":username,
      "newpass":password
    }
      return new Promise((resolve)=>{
        this._http.post<boolean>('http://127.0.0.1:8000/api/changepass',data,httpOptions)
        .subscribe((u)=>{
            resolve();
        });
      });

   }
   suppcompte(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let data={
      "username":username,

    }
      return new Promise((resolve)=>{
        this._http.post<boolean>('http://127.0.0.1:8000/api/suppuser',data,httpOptions)
        .subscribe((u)=>{
            resolve();
        });
      });

   }


}
