import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';
import { type } from 'os';
import { resolve } from 'path';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
 

  authSubsscription: Subscription;
  typesubscription:Subscription;
  constructor(private gererplatService : GererplatService,
    private authService : AuthService
) { }
addedqte=0;
@Input() id;
@Input() name;
@Input() quantite ;
@Input() index;
@Input() authStatus; 
@Input() type;
msg;
total=this.addedqte + this.quantite;
 ngOnInit() {
 
 
 }

  possible(){
    //console.log(this.authStatus);
 
    return this.authStatus&&this.quantite>0;
  }


  
  Quantite(){
    return this.quantite>0;
  }
  comande(){

    this.quantite--;
    if(this.quantite<0){
      this.quantite=0;
    }
    //this.gererplatService.comander(this);
    

  }
  approvisionner(){
    this.gererplatService.approvisionner(this.id,this.addedqte).subscribe(arg => this.msg = arg);
    this.gererplatService.initplat();
    this.gererplatService.generatePlat();
  }
  supprimer(){
    let a = new Promise((resolve)=>{
      this.gererplatService.supprimer(this.id).subscribe(arg => this.msg = arg);
      resolve();
    })
    a.then(()=>{
      this.gererplatService.initplat();
      this.gererplatService.generatePlat();
    });
    
  }
  
}
