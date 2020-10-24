import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import { SidebarComponent } from './Navigation/sidebar/sidebar.component';
import { HeaderComponent } from './Statistique/header/header.component';
import { ListTacheComponent } from './dashbord/list-tache/list-tache.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddTacheComponent} from "./dashbord/add-tache/add-tache.component";
import { ModifeTacheComponent } from './dashbord/modife-tache/modife-tache.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    AddTacheComponent,
    ListTacheComponent,
    ModifeTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
