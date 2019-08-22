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
    this.authSubsscription.unsubscribe();
    this.typesubscription.unsubscribe();
  }
 
  
  constructor(private gererplatService : GererplatService,
              private router: Router,
              private authService : AuthService
      ) {       }

      authSubsscription :Subscription;
      authStatus;
      typesubscription : Subscription;
      title = 'EDL';
      type ="local";
  ngOnInit() {
    this.authService.signout();
   this.authSubsscription=this.authService.authsubject.subscribe((auths)=>{
     this.authStatus=auths;
   });
   this.typesubscription=this.authService.usertypesubject.subscribe((typu)=>{
    this.type=typu;
  });
   
    this.gererplatService.initplat();
   
  }
  onSignOut(){
    this.authService.signout();

    this.router.navigate(['']);
  }
  
}
