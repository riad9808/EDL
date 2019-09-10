import { Injectable } from '@angular/core';
import { commande } from '../models/commande.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { souscom } from '../models/souscom.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GerercommandeService {
  static c: commande;

  possible=false;
  commandes:commande[];
  commandesapyer:commande[];
  comaservir:commande[];
  historiquecom:commande[];

  private comaservirsub=new BehaviorSubject(undefined);
  private comapyer=new BehaviorSubject(undefined);
  private comsub=new BehaviorSubject(undefined);
  private comshistorique=new BehaviorSubject(undefined);

  publishcom=this.comsub.asObservable();
  publishcomapyer=this.comapyer.asObservable();
  publishcomaserv =this.comaservirsub.asObservable();
  publishcomahistorique =this.comshistorique.asObservable();

 // commandesSubject:Subject<commande[]>= new Subject<commande[]>();
  commandesemit(){
    this.comsub.next(this.commandes);
  }
  commandesapyeremit(){
    this.comapyer.next(this.commandesapyer);
  }
  commandesaserviremit(){
    this.comaservirsub.next(this.comaservir);
  }
  commandehistoriqueemit(){
    this.comshistorique.next(this.historiquecom);
  }
  constructor(private _http:HttpClient) {

   }
  createcommandeserveur(a,b){
    GerercommandeService.c=new commande(a,b,'');
    console.log(GerercommandeService.c);
    this.possible=true;
  }
  createcommandeclient(a,b){
    GerercommandeService.c=new commande(a,0,b);
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
  valider(){
    //let x:Subject<any>= new Subject;

         return new Promise((resolve,reject)=>{
          if(GerercommandeService.c.souscom.length===0){
            this.possible=false;

            reject();
          }else{
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };
               this._http.post<any>('/api/commander',GerercommandeService.c,httpOptions).subscribe((u)=>{
                this.possible=false;


               });
               resolve();

          }

    })





  }
  avalider(){
    let x
    return new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        x= this._http.get<commande[]>('/api/comavalider',httpOptions).subscribe((u)=>{
          this.commandes=u;
          //this.checkchanges();
          //console.log(this.commandes);
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
          x= this._http.get<commande[]>('/api/apayer',httpOptions).subscribe((u)=>{
            this.commandesapyer=u;
           // this.checkchanges();
            //console.log(this.commandes);
            this.commandesapyeremit();
          });


          resolve();
      })



  }

  aservir(){
    let x
    return new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      let data = {
        "serveur":sessionStorage.getItem('user')
      }
        x= this._http.post<commande[]>('/api/comaservir',data,httpOptions).subscribe((u)=>{
          this.comaservir=u;
         // this.checkchanges();
          //console.log(this.commandes);
          this.commandesaserviremit();
        });


        resolve();
    })
}
historiquecoms(){
  let x
  return new Promise((resolve)=>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

      x= this._http.get<commande[]>('/api/historique',httpOptions).subscribe((u)=>{
        this.historiquecom=u;
       // this.checkchanges();
        //console.log(this.commandes);
        this.commandehistoriqueemit();
      });


      resolve();
  })



}
  cuisiniervalidate(id) {
    let x
    console.log(id);
    return new Promise((resolve)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        let data ={
          "id":id
        };
        x= this._http.post<boolean>('/api/validateur',data,httpOptions).subscribe((u)=>{
          this.avalider().then(   ()=>     resolve(u));
          resolve(u);
        })



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
        x= this._http.post<boolean>('/api/annulercom',data,httpOptions);
        this.avalider().then(   ()=>     resolve())
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
        x= this._http.post<boolean>('/api/prete',data,httpOptions);
        this.avalider().then(   ()=>     resolve())

        resolve();
    })
    return x;
  }
  caissierpayer(id):Observable<boolean>{
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
        x= this._http.post<boolean>('/api/payer',data,httpOptions);
        this.apayer().then(   ()=>     resolve())

        resolve();
    })
    return x;
  }

  retirercom(id):Observable<boolean>{
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
        x= this._http.post<boolean>('/api/retirercom',data,httpOptions);
        this.aservir().then(   ()=>     resolve())

        resolve();
    })
    return x;
  }
  static datechange:Date=new Date();
 static  dernieredate:Date;

  checkchanges(){
    return new Promise((resolve,reject)=>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
      })
    };


      let a= new Promise((resolve)=>{

        this._http.get<Date>('/api/lastupdate',httpOptions).subscribe((u)=>{
          GerercommandeService.dernieredate=GerercommandeService.datechange;
          GerercommandeService.datechange=u;
          resolve();
        });

      }).then(()=>{
        console.log('changer '+GerercommandeService.datechange);
        if(GerercommandeService.dernieredate<GerercommandeService.datechange){

        this.aservir().then();
        this.apayer().then();
        this.avalider().then();
        resolve();
      } else{
          resolve();
        }
      })
      .then(()=>{
        resolve();
      })
      /*a.then(()=>{
        resolve();
      })*/



    });
  }


}
