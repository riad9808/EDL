import { Component, OnInit } from '@angular/core';
import { GererplatService } from '../services/gererplat.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comander',
  templateUrl: './comander.component.html',
  styleUrls: ['./comander.component.css']
})
export class ComanderComponent implements OnInit {
  
 
  constructor(private gererplatService : GererplatService,
    private authservice : AuthService) { }
  mesplats=this.gererplatService.plats;
  ngOnInit() {
    
   
  }

}
