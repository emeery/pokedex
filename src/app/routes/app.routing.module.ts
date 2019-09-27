import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../core/home/home.component';
import { PokelistaComponent } from '../components/pokelista/pokelista.component';



const rutas: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'pokemones',
      component: PokelistaComponent
    },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
