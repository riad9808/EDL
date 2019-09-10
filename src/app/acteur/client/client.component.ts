import { Component, OnInit } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  commandeForm;
  errorMessage;
  constructor(private gerercommande : GerercommandeService,
    private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    /*
    setInterval(()=>{
      this.gerercommande.checkchanges().then()
    }, 5000)*/
    this.initForm();
    //this.gerercommande.possiblesub.next(this.commandeForm.in)
  }
  initForm() {
    this.commandeForm = this.formBuilder.group({
      adresse: ['', Validators.required],


    });
}
onSubmit(){
    this.gerercommande.possible=true;
    this.gerercommande.createcommandeclient(
      sessionStorage.getItem('user'),
      this.commandeForm.get('adresse').value);
  }
  possible(){

      return this.gerercommande.possible

  }
  valider(){
    this.gerercommande.possible=false;
      this.gerercommande.valider().then((res)=>{

        alert('succes');
          this.router.navigate(['']);}).catch((res)=>{
            alert('erreur');
              this.router.navigate(['']);});
  }



  }


