import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
 
 @Input() id;
 @Input() name;
 @Input() quantite;
 @Input() index;
  
authStatus=this.authservice.isAuth;
authSubsscription : Subscription;
 ngOnInit() {
 
 
  this.subscribe();
 }

 subscribe(){
  
    this.authSubsscription=this.authservice.authSubject.subscribe(
      (authobj : boolean)=>{
        this.authStatus=authobj;
        
      }
    )}
  possible(){
    this.subscribe();
    return this.authStatus&&this.quantite>0;
  }


  constructor(private gererplatService : GererplatService,
              private authservice : AuthService
    ) { }
  Quantite(){
    return this.quantite>0;
  }
  comande(){
  
    this.quantite--;
    if(this.quantite<0){
      this.quantite=0;
    }
  }
  
}
