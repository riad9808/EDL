import { Injectable } from '@angular/core';
import { commande } from '../models/commande.model';
import { Observable, Subject } from 'rxjs';
import { souscom } from '../models/souscom.model';

@Injectable({
  providedIn: 'root'
})
export class GerercommandeService {
   c: commande;
  //possiblesub:Subject<boolean>;
  possible=false;
  constructor() {
    
   }
  createcommande(a,b){
    this.c=new commande(a,b);
    console.log(this.c);
    this.possible=true;
  }
  ajoutsouscomande(a,b){
    let Souscom :souscom=new souscom(a,b);
    console.log(Souscom);
    this.c.souscom.push(Souscom);
    console.log(this.c);
  }
}
