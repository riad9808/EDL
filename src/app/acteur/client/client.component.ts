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
  }
  nouvellecommande(){
    this.gerercommande.possible=true;
    this.gerercommande.createcommande(
      localStorage.getItem('user'),
      0);
  }
  possible(){

      return this.gerercommande.possible

  }
  valider(){
    this.gerercommande.valider().subscribe((res)=>{
      if(res==='succes'){

        alert('succes');
        this.router.navigate(['']);

      }else{
        alert('erreur');
        this.router.navigate(['']);

      }
    })
  }



  }


