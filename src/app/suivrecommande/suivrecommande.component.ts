import { Component, OnInit, OnDestroy } from '@angular/core';
import { GerercommandeService } from '../services/gerercommande.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-suivrecommande',
  templateUrl: './suivrecommande.component.html',
  styleUrls: ['./suivrecommande.component.css']
})
export class SuivrecommandeComponent implements OnInit,OnDestroy {


  constructor(
    private gerercom :GerercommandeService
  ) { }
  type=sessionStorage.getItem('type');
  comamandesSubscription:Subscription;
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
    setInterval(()=>{
      this.gerercom.checkchanges().then()
    }, 10000)
  }
  ngOnDestroy(): void {
    this.comamandesSubscription.unsubscribe()
  }
}
