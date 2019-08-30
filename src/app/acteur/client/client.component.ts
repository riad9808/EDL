import { Component, OnInit } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private gerercommande : GerercommandeService,private router:Router) { }

  ngOnInit() {
    /*
    setInterval(()=>{
      this.gerercommande.checkchanges().then()
    }, 50000)*/
  }
  nouvellecommande(){
    this.gerercommande.possible=true;
    this.gerercommande.createcommande(
      sessionStorage.getItem('user'),
      0);
  }
  possible(){

      return this.gerercommande.possible

  }
  valider(){

      this.gerercommande.valider().then((res)=>{

        alert('succes');
          this.router.navigate(['']);}).catch((res)=>{
            alert('erreur');
              this.router.navigate(['']);});
  }



  }


