import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { GererplatService } from 'src/app/services/gererplat.service';
import { produit } from 'src/app/models/produit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
produitForm:FormGroup;
b:boolean;

  constructor(private formBuilder: FormBuilder ,
    private gererplatService : GererplatService,
    private router:Router
    ) { }
  typeoption = [
    {id:1,label : 'boisson'},
    {id:2,label : 'plat'}

  ]
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.produitForm = this.formBuilder.group({
      categorie: ['', Validators.required],
      produit: ['', Validators.required],

      taille: ['', Validators.required, ],
      prix: ['', Validators.required],
      qtstock: ['', Validators.required],

    });
}
onSubmit(produitForm:NgForm){
  let Produit:produit=new produit(
    this.produitForm.get('categorie').value,
    this.produitForm.get('produit').value,
    this.produitForm.get('taille').value,
    this.produitForm.get('prix').value,
    this.produitForm.get('qtstock').value
  );


  let a=new Promise((resolve,reject)=>{
    this.gererplatService.ajoutproduit(Produit).subscribe((b:boolean)=>{
   // this.gererplatService.initplat();
    //this.gererplatService.generatePlat();
    this.gererplatService.getplat();

      this.b=b;
      resolve();
    })
  })


    a.then(()=>{
      if(this.b){
      alert("succes");
      this.router.navigate(['gerent']);}
      //else
     // this.errorMessage="nom d'utilisateur ou telephone dejas utilisé";
    });
}

}
