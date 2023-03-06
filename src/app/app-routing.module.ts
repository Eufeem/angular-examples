import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { P1Component } from './components/p1/p1.component';
import { P2Component } from './components/p2/p2.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/principal', 
    pathMatch: 'full' 
  }, {
    path: 'principal', 
    component: PrincipalComponent,
  }, { 
    path: 'p1', 
    component: P1Component,
  }, { 
    path: 'p2', 
    component: P2Component,
  }, {
    path: 'auto',
    component: AutocompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
