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
import { ModalComponent } from './components/pokelista/modal/modal.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PokelistaComponent,
    HeaderComponent,
    HomeComponent,
    PokeAddComponent,
    ModalComponent
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
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
