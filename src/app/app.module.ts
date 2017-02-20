import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';
import { homeComponent } from './home/app.homeComponent';
import { navComponent } from './nav/app.navComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { newsComponent } from './news/app.newsComponent';
import { contactComponent } from './contact/app.contactComponet';
import { loginComponent } from './login/app.loginComponent';



@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    homeComponent,
    navComponent,
    aboutComponent,
    newsComponent,
    contactComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: homeComponent
    },
    {
      path: 'about',
      component: aboutComponent
    }, 
    {
      path: 'news',
      component: newsComponent
    },
    {
      path: 'contact',
      component: contactComponent
    },
    {
      path: 'login',
      component: loginComponent
    },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
