import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../core/home/home.component';
import { PokelistaComponent } from '../components/pokelista/pokelista.component';
import { PokeAddComponent } from '../components/pokeadd/pokeadd.component';

const rutas: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: HomeComponent
  },
  {
    path: 'pokemones',
    component: PokelistaComponent
  },
  {
    path: 'crear',
    component: PokeAddComponent
  },
  {
    path: '**',
    redirectTo: '/welcome',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
