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
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SuperModalComponent } from './components/pokelista/supermodal/supermodal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistaComponent,
    HeaderComponent,
    HomeComponent,
    PokeAddComponent,
    SuperModalComponent
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
    SuperModalComponent
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
