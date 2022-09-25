import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurbookComponent } from './ourbook/ourbook.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
 
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'aboutus',
    component:AboutusComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'ourbook',
    component:OurbookComponent,
  },
  {
    path:'footer',
    component:FooterComponent,
  },
  {
    path:'user',
    component:UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
