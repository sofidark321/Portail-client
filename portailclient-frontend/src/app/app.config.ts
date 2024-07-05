import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcComponent } from './parc/parc.component';
import { NavireComponent } from './navire/navire.component'; // Import du composant Navire

const routes: Routes = [
  { path: 'parc', component: ParcComponent },
  { path: 'navire', component: NavireComponent } // Ajoutez le composant Navire ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
