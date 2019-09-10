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
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import { AjoutCompteComponent } from './acteur/gerent/ajout-compte/ajout-compte.component';
import { AjoutcompteService } from './services/ajoutcompte.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AjoutproduitComponent } from './acteur/gerent/ajoutproduit/ajoutproduit.component'
import { GerercommandeService } from './services/gerercommande.service';
import { CuisinierComponent } from './acteur/cuisinier/cuisinier.component';
import { CommandeComponent } from './acteur/cuisinier/commande/commande.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SuivrecommandeComponent } from './suivrecommande/suivrecommande.component';
import { GerercompteComponent } from './acteur/gerent/gerercompte/gerercompte.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HistoriqueComponent } from './acteur/gerent/historique/historique.component';
import { UserComponent } from './acteur/gerent/user/user.component';

const appRoutes: Routes = [

  { path: 'caissier', canActivate: [AuthguardService],component: CaissierComponent },
  { path: 'serveur', canActivate: [AuthguardService],component: ServeurComponent },
  { path: 'gerent', canActivate: [AuthguardService],component: GerentComponent },
  { path: 'cuisinier', canActivate: [AuthguardService],component: CuisinierComponent },
  { path: 'client', canActivate: [AuthguardService],component: ClientComponent },
  { path: 'gerent/gerercompte', canActivate: [AuthguardService],component: GerercompteComponent },
  { path: 'gerent/historique', canActivate: [AuthguardService],component: HistoriqueComponent },

  { path: 'suivrecom', canActivate: [AuthguardService],component: SuivrecommandeComponent },

  { path: 'gerent/ajoutcompte', canActivate: [AuthguardService],
    component: AjoutCompteComponent },
  { path: 'gerent/ajoutproduit', canActivate: [AuthguardService],component: AjoutproduitComponent },

  { path: 'plats', component: ComanderComponent },
  { path: 'auth', component: AuthComponent },
  { path: '',component: ComanderComponent },

 { path: 'not-found', component: FourOhFourComponent },
 { path: '**', redirectTo: 'not-found' }

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
    ClientComponent,
    AjoutCompteComponent,
    AjoutproduitComponent,
    CuisinierComponent,
    CommandeComponent,
    SuivrecommandeComponent,
    GerercompteComponent,
    FourOhFourComponent,
    HistoriqueComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes),
     BrowserAnimationsModule,
     MatInputModule,
     MatMenuModule,
     MatSelectModule,
     MatSidenavModule,
     MatExpansionModule,
     MatGridListModule,
     MatListModule
  ],
  providers: [GererplatService,AuthService,AuthguardService,AjoutcompteService,GerercommandeService],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatCheckboxModule,MatCardModule]
})
export class AppModule { }
