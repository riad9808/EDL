import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ComanderComponent } from './comander/comander.component';
import { PlatComponent } from './plat/plat.component';
import { GererplatService } from './services/gererplat.service';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServeurComponent } from './acteur/serveur/serveur.component';
import { GerentComponent } from './acteur/gerent/gerent.component';
import { CaissierComponent } from './acteur/caissier/caissier.component';
import { ClientComponent } from './acteur/client/client.component';
import { AuthguardService } from './services/authguard.service';
const appRoutes: Routes = [

  { path: 'caissier', canActivate: [AuthguardService],component: CaissierComponent },
  { path: 'serveur', canActivate: [AuthguardService],component: ServeurComponent },

  { path: 'plats', component: ComanderComponent },
  { path: 'auth', component: AuthComponent },
  { path: '',component: ComanderComponent },

 // { path: 'not-found', component: FourOhFourComponent },
 // { path: '**', redirectTo: 'not-found' }

];
@NgModule({
  declarations: [
    AppComponent,
    PlatComponent,
    AuthComponent ,
    ComanderComponent,
    ServeurComponent,
    GerentComponent,
    CaissierComponent,
    ClientComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [GererplatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
