import { Component, OnInit } from '@angular/core';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {
  errorMessage;
  constructor(private gerercommande : GerercommandeService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }
numtable;
commandeForm;
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
      num_table: ['', Validators.required],


    });
}
onSubmit(commandeForm:NgForm){
    this.gerercommande.createcommande(
      sessionStorage.getItem('user'),
      this.commandeForm.get('num_table').value);


  }
  possible(){

      return this.gerercommande.possible

  }
  valider(){
    this.gerercommande.valider().then((res)=>{

      alert('succes');
        this.router.navigate(['']);})
        .catch((res)=>{
          alert('erreur');
            this.router.navigate(['']);});
    /*this.gerercommande.valider().catch((res)=>{
          alert('erreur');
            this.router.navigate(['']);});
    /*  if(res==='succes'){

        alert('succes');
        this.router.navigate(['']);

      }else{
        alert('erreur');
        this.router.navigate(['']);

      }*/

  }

}
