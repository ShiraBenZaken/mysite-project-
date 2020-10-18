import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {ContactComponent} from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
  { path: 'home-component', component: HomepageComponent },
  { path: 'contant-component', component: ContactComponent },
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
