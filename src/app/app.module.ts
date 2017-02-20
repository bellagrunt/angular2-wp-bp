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


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    homeComponent,
    navComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
    component: homeComponent
     }, 
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
