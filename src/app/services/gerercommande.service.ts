import { Injectable } from '@angular/core';
import { commande } from '../models/commande.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { souscom } from '../models/souscom.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GerercommandeService {
  static c: commande;
  //possiblesub:Subject<boolean>;
  possible=false;
  commandes:commande[];
  commandesapyer:commande[];
  private comapyer=new BehaviorSubject(undefined);
  private comsub=new BehaviorSubject(undefined);
  publishcom=this.comsub.asObservable();
  publishcomapyer=this.comapyer.asObservable();

  commandesSubject:Subject<commande[]>= new Subject<commande[]>();
  commandesemit(){
    this.comsub.next(this.commandes);
  }
  commandesapyeremit(){
    this.comsub.next(this.commandesapyer);
  }
  constructor(private _http:HttpClient) {

   }
  createcommande(a,b){
    GerercommandeService.c=new commande(a,b);
    console.log(GerercommandeService.c);
    this.possible=true;
  }
  ajoutsouscomande(a,b) : souscom{
    let Souscom :souscom=new souscom(a,b);
    console.log(Souscom);
    GerercommandeService.c.souscom.push(Souscom);
    console.log(GerercommandeService.c);
    return Souscom;
  }
  suppsous(a){
    let b=GerercommandeService.c.souscom.indexOf(a);
    GerercommandeService.c.souscom.splice(b,1);
    console.log(GerercommandeService.c);
  }
  valider():Observable<any>{
    let x
    let a=new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        x= this._http.post<any>('http://127.0.0.1:8000/api/commander',GerercommandeService.c,httpOptions);
        this.possible=false;

        resolve();
    })
    return x;

  }
  avalider(){
    let x
    return new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        x= this._http.get<commande[]>('http://127.0.0.1:8000/api/comavalider',httpOptions).subscribe((u)=>{
          this.commandes=u;
          console.log(this.commandes);
          this.commandesemit();
        });


        resolve();
    })
  }
    apayer(){
      let x
      return new Promise((resolve)=>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
          x= this._http.get<commande[]>('http://127.0.0.1:8000/api/apayer',httpOptions).subscribe((u)=>{
            this.commandesapyer=u;
            //console.log(this.commandes);
            this.commandesapyeremit();
          });


          resolve();
      })



  }
  cuisiniervalidate(id):Observable<boolean> {
    let x
    console.log(id);
    let a=new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        let data ={
          "id":id
        };
        x= this._http.post<boolean>('http://127.0.0.1:8000/api/validateur',data,httpOptions);

        resolve();
    })
    return x;
  }
  cuisinierannuler(id):Observable<boolean>{
    let x
    console.log(id);
    let a=new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        let data ={
          "id":id
        };
        x= this._http.post<boolean>('http://127.0.0.1:8000/api/annulercom',data,httpOptions);

        resolve();
    })
    return x;
  }
  cuisinierprete(id):Observable<boolean>{
    let x
    console.log(id);
    let a=new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        let data ={
          "id":id
        };
        x= this._http.post<boolean>('http://127.0.0.1:8000/api/prete',data,httpOptions);

        resolve();
    })
    return x;
  }

  /*
   avalider():Observable<commande[]>{
    let x
    let a=new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        x= this._http.get<commande[]>('http://127.0.0.1:8000/api/comavalider',httpOptions).subscribe((u)=>{
          this.commandes=u;
          console.log(this.commandes);
        });


        resolve();
    })
    this.commandesemit();
    return x;

  }*/
}
