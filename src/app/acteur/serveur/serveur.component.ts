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

  constructor(private gerercommande : GerercommandeService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }
numtable;
commandeForm;
  ngOnInit() {
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
      localStorage.getItem('user'),
      this.commandeForm.get('num_table').value);
      

  }
  possible(){
    //console.log(this.authStatus);
      return this.gerercommande.possible
   // return this.authStatus&&this.quantite>0;
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
