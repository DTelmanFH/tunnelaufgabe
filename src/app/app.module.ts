import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AufgabenstellungComponent } from './aufgabenstellung/aufgabenstellung.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { MainAufgabeComponent } from './main-aufgabe/main-aufgabe.component';
import { StreckeEingabeComponent } from './main-aufgabe/strecke-eingabe/strecke-eingabe.component';
import { UnfallEingabeComponent } from './main-aufgabe/unfall-eingabe/unfall-eingabe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AufgabenstellungComponent,
    MainAufgabeComponent,
    StreckeEingabeComponent,
    UnfallEingabeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
