import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { AjoutcompteService } from 'src/app/services/ajoutcompte.service';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-compte',
  templateUrl: './ajout-compte.component.html',
  styleUrls: ['./ajout-compte.component.css']
})
export class AjoutCompteComponent implements OnInit {
  usersigned:user;
   b:boolean;
   errorMessage;
  userForm: FormGroup;
  typeoption = [
    {id:1,label : 'serveur'},
    {id:2,label : 'cuisinier'},
    {id:3,label : 'caissier'},
    {id:4,label : 'client'},
    {id:5,label : 'gerent'}
  ]
  constructor(private formBuilder: FormBuilder ,
              private ajoutcompteservice : AjoutcompteService,
              private router:Router
    ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      password2 :['',[Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      type: ['', Validators.required],
      telephone: ['',[ Validators.required,Validators.pattern(/[0-9]{10,}/),Validators.maxLength(10)]],

    });
}
onSubmit(userForm : NgForm){
  let p1=this.userForm.get('password').value;
  let p2=this.userForm.get('password2').value;

  console.log(this.userForm.get('type').value);
  let User:user=new user(
    this.userForm.get('username').value,
    this.userForm.get('fullname').value,

    this.userForm.get('telephone').value,
    this.userForm.get('password').value,
    this.userForm.get('type').value
  );
  let a=new Promise((resolve,reject)=>{
    if(p1!=p2){
      reject();
    }else{
      this.ajoutcompteservice.signup(User).subscribe((b:boolean)=>{

        this.b=b;
        resolve();
      })
    }

  })


    a.then(()=>{
      if(this.b){
      alert("succes");
      this.router.navigate(['gerent']);}
      else
      this.errorMessage="nom d'utilisateur ou telephone dejas utilisé";
    }).catch(()=>{
      this.errorMessage='mots de passe incoherent'
    });


}
}
