import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { Subscription, Observable } from 'rxjs';

import { resolve, reject } from 'q';
import { produit } from '../models/produit.model';

@Component({
  selector: 'app-comander',
  templateUrl: './comander.component.html',
  styleUrls: ['./comander.component.css']
})
export class ComanderComponent implements OnInit  , OnDestroy{

  constructor(private gererplatService : GererplatService,
    private authService : AuthService) {

    }


  typesubscription: Subscription;
  type: string=sessionStorage.getItem('type');
  public mesplats;
  mesproduitsubscription :Subscription;
  authStatus:boolean;
  produits :produit[];
lesplats:produit[];
lesboissons:produit[];
  authSubsscription:Subscription;
  ngOnInit() {

        this.gererplatService.getplat().then(()=>{

          this.mesproduitsubscription=this.gererplatService.published.subscribe((data:produit[])=>{
           this.produits=data;
           this.lesplats=[];
           this.lesboissons=[];
           this.produits.forEach(element => {
             if(element.categorie==='plat'){
               this.lesplats.push(element);
             }
             else{
               this.lesboissons.push(element);
             }
           });
           console.log( this.produits.length);

          })

        });







/*
    setInterval(()=>{
      this.gererplatService.getplat();
    }, 10000);*/

  this.authSubsscription=this.authService.authsubject.subscribe((auths)=>{
    this.authStatus=auths;
  });
  this.typesubscription=this.authService.usertypesubject.subscribe((typu)=>{
    this.type=typu;
  });


    console.log('type'+this.type);
  }


  ngOnDestroy(): void {
    this.authSubsscription.unsubscribe();
    this.typesubscription.unsubscribe();
    this.mesproduitsubscription.unsubscribe()
  }

}
