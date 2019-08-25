import { Component, OnInit, Input } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { PrefixNot } from '@angular/compiler';
import { type } from 'os';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  panelOpenState = false;
  @Input() type;
  @Input() a;
  @Input() id;
  //idd=this.a.commande.id;
  @Input() numtable;
  @Input() souscom;
  @Input() serveur;
  @Input() index;
  @Input() prix;
  constructor(private gerercom : GerercommandeService) { }
  val=true;
  ngOnInit() {
    console.log(this.souscom[0].produit);
  }
  valider(){
    this.gerercom.cuisiniervalidate(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.val=false;
  }
  annuler(){
    this.gerercom.cuisinierannuler(this.id).subscribe((u)=>{
      console.log(u);
    })
    //this.val=false;
  }
  prete(){
    this.gerercom.cuisinierprete(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.gerercom.avalider().then(()=>{
      this.gerercom.commandesemit();
    });
    //this.val=false;
  }
}
