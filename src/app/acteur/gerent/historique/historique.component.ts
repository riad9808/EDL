import { Component, OnInit } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private gerercom:GerercommandeService) { }
  comamandesSubscription:Subscription;
  lescoms
  ngOnInit() {
    this.gerercom.historiquecoms().then(()=>{
      this.gerercom.commandehistoriqueemit();

      this.comamandesSubscription=this.gerercom.publishcomahistorique.subscribe((u)=>{
        this.lescoms=u;
          });
      console.log(this.lescoms);
    });
  }

}
