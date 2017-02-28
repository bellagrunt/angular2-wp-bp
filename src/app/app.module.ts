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
import { FooterComponent } from './footer/app.footerComponent';
import { HomeComponent } from './home/app.homeComponent';
import { NavComponent } from './nav/app.navComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { NewsComponent } from './news/app.newsComponent';
import { ContactComponent } from './contact/app.contactComponet';
import { LoginComponent } from './login/app.loginComponent';
import { CarouselComponent } from './carousel/app.carouselComponent';
import { GalleryComponent } from './gallery/app.galleryComponent';
import { Admin2Component } from './admin2/admin2.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    CarouselComponent,
    GalleryComponent,
    Admin2Component,
    AdminComponent,
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
