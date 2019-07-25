import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent implements OnInit {

  payerForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
             
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.payerForm = this.formBuilder.group({
      montant: ['', [Validators.required]],
      
    });
  }

  onSubmit() {
    
    const montant = this.payerForm.get('montant').value;
    /*
    
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/comande']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );*/
    console.log(montant);
  }

}
