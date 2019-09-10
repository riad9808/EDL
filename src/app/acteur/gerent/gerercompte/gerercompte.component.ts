import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AjoutcompteService } from 'src/app/services/ajoutcompte.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-gerercompte',
  templateUrl: './gerercompte.component.html',
  styleUrls: ['./gerercompte.component.css']
})
export class GerercompteComponent implements OnInit {
  suppForm :FormGroup;
  modifierForm :FormGroup;
  errorMessage1;
  errorMessage2;
  users:user[];
  clients:user[];
  employees:user[];
  usersub:Subscription;
  constructor(private formBuilder: FormBuilder,private gerercompte : AjoutcompteService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.gerercompte.getusers().then(()=>{
      this.usersub=this.gerercompte.published.subscribe((data:user[])=>{
        this.users=data;
        this.clients=[];
        this.employees=[];
        this.users.forEach(element => {
          if(element.type==='client'){
            this.clients.push(element);
          }else{
            this.employees.push(element);
          }
        });

      })
    });

  }

  initForm() {
    this.modifierForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
    this.suppForm = this.formBuilder.group({
      username2: ['', Validators.required],

    });
  }

  onSubmitmodif() {
    const username = this.modifierForm.get('username').value;
    const password = this.modifierForm.get('password').value;
    this.gerercompte.modifiermdp(username,password).then((u)=>{
      if(u==false){
        alert("utilisateur inexistant");
      this.router.navigate(['/gerent']);
      }else{
        alert("succes");
        this.router.navigate(['/gerent']);
      }

    })

  }
  onSubmitsupp(){
    const username = this.suppForm.get('username2').value;

    this.gerercompte.suppcompte(username).then((u)=>{
      if(u==false){
        alert("utilisateur inexistant");
      this.router.navigate(['/gerent']);
      }else{
        alert("succes");
        this.router.navigate(['/gerent']);
      }
    })
  }

}
