import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {plat} from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class GererplatService  {
   static lesplats:plat[]=[];
   
plat1:plat=new plat(1,'frites',20);
plat2:plat=new plat(2,'escalopes',20);
plat3:plat=new plat(3,'pizza',20);
platSubject=new Subject<plat[]>();



  constructor() {
    
    GererplatService.lesplats.push(this.plat1);
    
    GererplatService.lesplats.push(this.plat2);
    GererplatService.lesplats.push(this.plat3);

   }
  
   generatePlat(){
    this.platSubject.next(GererplatService.lesplats);
   }
  
  public plats = [
   {     id:1,      name: 'frites',     quantite: 20},
   {     id:2,      name: 'escalopes',      quantite: 12},
   {     id:3,      name: 'pizza',      quantite: 23    }
];

comander(plat:plat){
 
  GererplatService.lesplats.find(
    (element1)=>{
    return element1.id===plat.id;
  }).quantite--;

  this.generatePlat();
}
}
