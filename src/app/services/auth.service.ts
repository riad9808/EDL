import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';
import { user , UserType } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public type="serveur";
  constructor() { }
  typeSubject = new Subject<string>();
  authSubject = new Subject<boolean>();
  isAuth=false;
  
  
  

signInUser(email: string, password: string) {
  
  return new Promise(

    (resolve, reject) => {
      
        if(this.verifySigning(email,password)){
         // this.typeSubject.next("gerent"); 
         this.authSubject.next(true);
          this.isAuth=true;
          
          resolve();
        }
        else{
          resolve();
        }

          

       

        (error) => {

          reject(error);

        }

      

    }

  );
  }
  signout(){
    this.authSubject.next(false);
    this.isAuth=false;

  }
  verifySigning(email: string, password: string):boolean{
    if(email==="a@b.c"){
      this.typeSubject.next("serveur"); 
     // localStorage.setItem('userType',UserType.serveur.toString());
      localStorage.setItem('userId',email);
    return true;
    }else
    return false;
  }
  
}
