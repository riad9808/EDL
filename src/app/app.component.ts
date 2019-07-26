import { Component, OnInit, OnDestroy } from '@angular/core';
import { GererplatService } from './services/gererplat.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  
  
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  authSubsscription :Subscription;
  authStatus=this.authService.isAuth;
  typesubscription : Subscription;
  title = 'EDL';
  type ="local";
  constructor(private gererplatService : GererplatService,
              private router: Router,
              private authService : AuthService
      ) { }
  mesplats=this.gererplatService.plats;
  ngOnInit() {
    this.typesubscription=this.authService.typeSubject.subscribe(
      (typee :string)=>{
        this.type=typee;
      }
    );
    this.authSubsscription=this.authService.authSubject.subscribe(
      (authobj : boolean)=>{
        this.authStatus=authobj;
      }
    );
  }
  onSignOut(){
    this.authService.signout();
    this.router.navigate(['']);
  }
}
