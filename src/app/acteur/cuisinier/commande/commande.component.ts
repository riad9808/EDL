import { Component, OnInit, Input } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { PrefixNot } from '@angular/compiler';
import { type } from 'os';
import { validateConfig } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { commande } from 'src/app/models/commande.model';

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
  @Input() valide;
  //idd=this.a.commande.id;
  @Input() numtable;
  @Input() souscom;
  @Input() serveur;
  @Input() index;
  @Input() prix;
  @Input() date;

  constructor(private gerercom : GerercommandeService,
    private router : Router
    ) { }
  val=true;
  ngOnInit() {
    console.log(this.souscom[0].produit);

  }

  valider(){
    this.gerercom.cuisiniervalidate(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.gerercom.avalider().then(()=>{
      this.gerercom.commandesemit();
    });

  }
  annuler(){
    this.gerercom.cuisinierannuler(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.gerercom.avalider().then(()=>{
      this.gerercom.commandesemit();
    });
    this.gerercom.aservir().then(()=>{
      this.gerercom.commandesaserviremit();
    });

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
  payer(){
    this.gerercom.caissierpayer(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.gerercom.apayer().then(()=>{
      this.gerercom.commandesapyeremit();

    });
    this.gerercom.aservir().then(()=>{
      this.gerercom.commandesaserviremit();
    })
    //this.val=false;
  }
  retirer(){
    this.gerercom.retirercom(this.id).subscribe((u)=>{
      console.log(u);
    })
    this.gerercom.aservir().then(()=>{
      this.gerercom.commandesaserviremit();
    });
    this.router.navigate(['']);    //this.val=false;
  }
}
