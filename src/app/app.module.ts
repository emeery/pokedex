import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokelistaComponent } from './components/pokelista/pokelista.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { AngularMaterialModule } from './angular_material.module';
import { PokeAddComponent } from './components/pokeadd/pokeadd.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistaComponent,
    HeaderComponent,
    HomeComponent,
    PokeAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
