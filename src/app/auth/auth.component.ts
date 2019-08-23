import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { user } from '../models/user.model';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

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
  
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const username = this.signinForm.get('username').value;
    const password = this.signinForm.get('password').value;
    let a= new Promise((resolve,reject)=>{
      this.authService.signInUser(username, password).subscribe(
        (u) => {
          if(u=='erreur'){
            reject();
          }else{
            if(u==null){
              reject();

            }else{
              this.type=u;
              this.authService.isAuth=true;
              this.authService.emitAuthstate();
              this.authService.usertype=this.type;
              this.authService.emitusertypesubject();
              localStorage.setItem('type', this.type);
              localStorage.setItem('user',username);
              resolve();
            }
           

          }
          
          //localStorage.setItem('logged', 'true');
          
         });
         
    });
   
    a.then(()=>{
      this.router.navigate(['/'+this.type]);
    });
    a.catch(()=>{
      this.errorMessage='erreur de conexion';
    });
         
      
      }

  }

