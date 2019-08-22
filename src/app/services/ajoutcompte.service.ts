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
  


}
