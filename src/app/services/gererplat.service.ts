import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GererplatService {

  constructor() { }
  public plats = [
   {     id:1,      name: 'frites',     quantite: 20},
   {     id:2,      name: 'escalopes',      quantite: 12},
   {     id:3,      name: 'pizza',      quantite: 23    }
];
}
