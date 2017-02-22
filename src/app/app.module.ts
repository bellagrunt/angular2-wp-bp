import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';
import { HomeComponent } from './home/app.homeComponent';
import { navComponent } from './nav/app.navComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { newsComponent } from './news/app.newsComponent';
import { contactComponent } from './contact/app.contactComponet';
import { loginComponent } from './login/app.loginComponent';
import { carouselComponent } from './carousel/app.carouselComponent';
import { galleryComponent } from './gallery/app.galleryComponent';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    HomeComponent,
    navComponent,
    AboutComponent,
    newsComponent,
    contactComponent,
    loginComponent,
    carouselComponent,
    galleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
