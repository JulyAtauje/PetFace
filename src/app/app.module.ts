import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PetModule } from './pet.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    PetModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
