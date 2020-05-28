import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { EjercicioIfComponent } from './ejercicio-if/ejercicio-if.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponent,
    EjercicioIfComponent,
    ForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
