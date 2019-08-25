import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'dns';
import { produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class GererplatService  {
  public  produits=[];
  private datasub = new BehaviorSubject(undefined);
  published =this.datasub.asObservable();

   produitSubject:Subject<produit[]>=new Subject<produit[]>();
  emitproduits(){

    this.datasub.next(this.produits);
   }

  constructor(private _http:HttpClient ) {



   }
   /*
   initplat(){
     return new Promise((resolve)=>{
      this.getplat().subscribe(data=>
        this.produits=data
      );
      this.emitproduits();
      resolve();
     });




  }*/
getplat(){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  return new Promise((resolve)=>{
    this._http.get<produit[]>('http://127.0.0.1:8000/api/produit',httpOptions).subscribe((data)=>{
      this.produits=data;
      this.emitproduits();
    });

    resolve();
  });


}


approvisionner(id,addedqte){
  let x;
  return new Promise((resolve)=>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let col={
      "id":id,
      "addedqte":addedqte
    };
     this._http.post<boolean>('http://127.0.0.1:8000/api/approvisionner',col,httpOptions).subscribe((data)=>{
      x=data;
    });
    this.getplat();
    resolve(x);

  });


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
    this.getplat();
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

