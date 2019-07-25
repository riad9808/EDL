import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  
  signinForm: FormGroup;
  errorMessage: string;
  typesubscription: any;
  type: string;

  constructor(private formBuilder: FormBuilder,
             private authService : AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.typesubscription=this.authService.typeSubject.subscribe(
      (typee :string)=>{
        this.type=typee;
      }
    );
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    
    this.authService.signInUser(email, password).then(
      () => {
        if(this.authService.isAuth){
         
          console.log(this.type);
          this.router.navigate(['/'+this.type]);
        }else{
          this.errorMessage="erreur de connexion";
          
        }
        
      },
      (error) => {
        alert(error);
        this.errorMessage = error;
      }
    );
  }
}
