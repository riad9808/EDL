import { Component, OnInit } from '@angular/core';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { plat } from '../models/plat.model';

@Component({
  selector: 'app-comander',
  templateUrl: './comander.component.html',
  styleUrls: ['./comander.component.css']
})
export class ComanderComponent implements OnInit {
  
 
  constructor(private gererplatService : GererplatService,
    private authservice : AuthService) { }
  //mesplats=this.gererplatService.plats;
    mesplats:plat[];
    mesplatSubscription :Subscription;
  authStatus=this.authservice.isAuth;
authSubsscription : Subscription;
 ngOnInit() {
 this.subscribemesplats();
  this.subscribeAuth();
  this.gererplatService.generatePlat();

 }

 subscribeAuth(){
  
    this.authSubsscription=this.authservice.authSubject.subscribe(
      (authobj : boolean)=>{
        this.authStatus=authobj;
        
      }
    )}
  subscribemesplats (){
    this.mesplatSubscription=this.gererplatService.platSubject.subscribe(
      (_platliste:plat[])=>{
        this.mesplats=_platliste;
      }
      );
    
  }

}
