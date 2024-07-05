import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavireComponent } from './navire/navire.component';
import { ParcComponent } from './parc/parc.component';

const routes: Routes = [
  { path: 'navires', component: NavireComponent },
  { path: 'parcs', component: ParcComponent },
  { path: '', redirectTo: '/navires', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NavireComponent, // Si NavireComponent est aussi autonome
    ParcComponent  // Importation directe du composant autonome
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
