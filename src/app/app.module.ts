import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'




import { AppComponent } from './app.component';
import { Login_Component } from './dasboard/login.component';
import { DataComponent } from './dasboard/dataEntry.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,Login_Component,DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
