import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AjoutcompteService } from 'src/app/services/ajoutcompte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerercompte',
  templateUrl: './gerercompte.component.html',
  styleUrls: ['./gerercompte.component.css']
})
export class GerercompteComponent implements OnInit {
  suppForm :FormGroup;
  modifierForm :FormGroup;
  constructor(private formBuilder: FormBuilder,private gerercompte : AjoutcompteService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();

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

  onSubmitmodif(modifierForm : NgForm) {
    const username = this.modifierForm.get('username').value;
    const password = this.modifierForm.get('password').value;
    this.gerercompte.modifiermdp(username,password).then(()=>{
      alert("succes");
      this.router.navigate(['/gerent']);
    })

  }
  onSubmitsupp(suppForm : NgForm){
    const username = this.suppForm.get('username2').value;

    this.gerercompte.suppcompte(username).then(()=>{
      alert("succes");
      this.router.navigate(['/gerent']);
    })
  }

}
