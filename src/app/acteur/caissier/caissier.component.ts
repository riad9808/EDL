import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GerercommandeService } from 'src/app/services/gerercommande.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent implements OnInit {
  type=localStorage.getItem('type');
  payerForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
               private gerercom : GerercommandeService ,
              private router: Router) { }
   comamandesSubscription:Subscription;
   lescoms
  ngOnInit() {
    this.initForm();
    this.gerercom.apayer().then(()=>{
      this.gerercom.commandesemit();

      this.comamandesSubscription=this.gerercom.publishcomapyer.subscribe((u)=>{
        this.lescoms=u;
          });
      console.log(this.lescoms);
    });


  }

  initForm() {
    this.payerForm = this.formBuilder.group({
      montant: ['', [Validators.required]],

    });
  }

  onSubmit() {

    const montant = this.payerForm.get('montant').value;

    console.log(montant);
  }

}
