import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [{ 
    path: 'home-component', component: AppComponent },
  { path: 'Contact-component', component: ContactComponent },]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
