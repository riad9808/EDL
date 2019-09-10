import { Component, OnInit, OnDestroy } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { commande } from 'src/app/models/commande.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cuisinier',
  templateUrl: './cuisinier.component.html',
  styleUrls: ['./cuisinier.component.css']
})
export class CuisinierComponent implements OnInit ,OnDestroy{


  constructor(private gerercom: GerercommandeService) { }
  type=sessionStorage.getItem('type');

  comamandesSubscription:Subscription;
  lescoms:commande[];
  ngOnInit() {

    this.gerercom.avalider().then(()=>{
      this.gerercom.commandesemit();

      this.comamandesSubscription=this.gerercom.publishcom.subscribe((u)=>{
        this.lescoms=u;

          });
      console.log(this.lescoms);


    });

    setInterval(()=>{
      this.gerercom.checkchanges().then()
    }, 2000)



  }

  ngOnDestroy(): void {
  //  this.comamandesSubscription.unsubscribe();
  }
}
