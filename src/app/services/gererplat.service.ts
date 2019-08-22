import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'dns';
import { produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class GererplatService  {
  public  lesplats=[];
   

platSubject=new Subject<any>();


  constructor(private _http:HttpClient ) {
    
   

   }
   initplat(){
     let a=new Promise((resolve)=>{
      this.getplat().subscribe(data=>
        this.lesplats=data
      );
      this.generatePlat();
      resolve();
     });
      
      
    a.then(()=>console.log(this.lesplats));

  }
getplat(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  return this._http.get<[]>('http://127.0.0.1:8000/api/produit',httpOptions);

}
   generatePlat(){
     
    this.platSubject.next(this.lesplats.slice());
   }
 
approvisionner(id,addedqte){
  let x;
  let a = new Promise((resolve)=>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let col={
      "id":id,
      "addedqte":addedqte
    };
    x= this._http.post<boolean>('http://127.0.0.1:8000/api/approvisionner',col,httpOptions);
    this.generatePlat();
    resolve();
    
  });
 
  return x;
}  
 
supprimer(id){
  let x;
  let a = new Promise((resolve)=>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let col={
      "id":id
      
    };
    x= this._http.post<boolean>('http://127.0.0.1:8000/api/delete',col,httpOptions);
    this.generatePlat();
    resolve();
});
return x
 
}

ajoutproduit(pr):Observable<boolean>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
    return this._http.post<boolean>('http://127.0.0.1:8000/api/addplat',pr,httpOptions);
 }
}

