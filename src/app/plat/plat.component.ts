import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl, PrefixNot } from '@angular/compiler';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';
import { type } from 'os';
import { resolve } from 'path';
import { GerercommandeService } from '../services/gerercommande.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {


  authSubsscription: Subscription;
  typesubscription:Subscription;
  constructor(private gererplatService : GererplatService,
    private authService : AuthService,
    private gerecommande:GerercommandeService
) { }

panelOpenState = false;
addedqte=0;
@Input() id;
@Input() categorie;
@Input() extra;
@Input() taille;
@Input() prix;
@Input() quantite ;
@Input() index;
@Input() authStatus;
@Input() type;
msg;
qtcomande=1;
total=this.addedqte + this.quantite;
 ngOnInit() {


 }
 p=true;
 pmod=false;
mysous;
  possible(){

      return this.gerecommande.possible&&(this.qtcomande<=this.quantite)&&this.p&&(this.qtcomande>0);

  }
  possible1(){

      return this.gerecommande.possible;

  }
  possible2(){

    return this.gerecommande.possible&&this.pmod&&(this.qtcomande>0);

}

  modifier(){
    this.qtcomande=1;
    this.p=true;
    this.gerecommande.suppsous(this.mysous);
  }

  Quantite(){
    return this.quantite>0;
  }
  comande(){
    this.p=false;
    this.pmod=true;

    this.mysous= this.gerecommande.ajoutsouscomande(this.id,this.qtcomande);
    /*
    this.quantite--;
    if(this.quantite<0){
      this.quantite=0;
    }
    //this.gererplatService.comander(this);
    */

  }
  approvisionner(){
    this.gererplatService.approvisionner(this.id,this.addedqte).then(arg => this.msg = arg);

  }
  supprimer(){
    let a = new Promise((resolve)=>{
      this.gererplatService.supprimer(this.id).subscribe(arg => this.msg = arg);
      resolve();
    })
    a.then(()=>{
     this.gererplatService.getplat();
    });

  }

}
