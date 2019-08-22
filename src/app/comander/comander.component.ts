import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { Subscription, Observable } from 'rxjs';

import { resolve, reject } from 'q';

@Component({
  selector: 'app-comander',
  templateUrl: './comander.component.html',
  styleUrls: ['./comander.component.css']
})
export class ComanderComponent implements OnInit  , OnDestroy{
  
  constructor(private gererplatService : GererplatService,
    private authService : AuthService) { }


  typesubscription: Subscription;
  type: string=localStorage.getItem('type'); 
  public mesplats;
  mesplatSubscription :Subscription;
  authStatus:boolean;

  platsub$:Observable<Array<any>>;

  authSubsscription:Subscription;
  ngOnInit() {
  

  this.authSubsscription=this.authService.authsubject.subscribe((auths)=>{
    this.authStatus=auths;
  });
  this.typesubscription=this.authService.usertypesubject.subscribe((typu)=>{
    this.type=typu;
  });

    this.gererplatService.getplat().subscribe((data)=>{
      this.mesplats=data;
    })
    this.gererplatService.generatePlat();
    
  
   
    console.log('type'+this.type);
  }
 
  subscribemesplats (){
    this.mesplatSubscription=this.gererplatService.platSubject.subscribe(
      (_platliste)=>{
        this.mesplats=_platliste;
        

      }
      );
    
  }
  ngOnDestroy(): void {
    this.authSubsscription.unsubscribe();
    this.typesubscription.unsubscribe();
  }

}
