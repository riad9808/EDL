import { Component, OnInit } from '@angular/core';
import { GerercommandeService } from '../services/gerercommande.service';

@Component({
  selector: 'app-suivrecommande',
  templateUrl: './suivrecommande.component.html',
  styleUrls: ['./suivrecommande.component.css']
})
export class SuivrecommandeComponent implements OnInit {

  constructor(
    private gerercom :GerercommandeService
  ) { }
  type=localStorage.getItem('type');
  comamandesSubscription
  lescoms;
//comavaservir
  ngOnInit() {
    this.gerercom.aservir().then(()=>{
      this.gerercom.commandesaserviremit();

      this.comamandesSubscription=this.gerercom.publishcomaserv.subscribe((u)=>{
        this.lescoms=u;
          });
      console.log(this.lescoms);
    });
  }

}
