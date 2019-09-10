import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AjoutcompteService {
  users:user[];
  private datasub = new BehaviorSubject(undefined);
  published =this.datasub.asObservable();


  emitusers(){

    this.datasub.next(this.users);
   }
  constructor(private _http:HttpClient) { }

   signup(User : user):Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this._http.post<boolean>('/api/inscription',User,httpOptions);
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
        this._http.post<boolean>('/api/changepass',data,httpOptions)
        .subscribe((u)=>{
            resolve(u);
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
        this._http.post<boolean>('/api/suppuser',data,httpOptions)
        .subscribe((u)=>{
            resolve(u);
        });
      });

   }

   getusers(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return new Promise((resolve)=>{
      this._http.get<user[]>('/api/listeuser',httpOptions).subscribe((data)=>{
        this.users=data;

        this.emitusers();
        resolve();
      });


    });


  }


}
