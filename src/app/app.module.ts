import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/app.headerComponent';
import { FooterComponent } from './components/footer/app.footerComponent';
import { HomeComponent } from './components/home/app.homeComponent';
import { NavComponent } from './components/nav/app.navComponent';
import { AboutComponent } from './components/about/app.aboutComponent';
import { NewsComponent } from './components/news/app.newsComponent';
import { ContactComponent } from './components/contact/app.contactComponet';
import { LoginComponent } from './components/login/app.loginComponent';
import { CarouselComponent } from './components/carousel/app.carouselComponent';
import { GalleryComponent } from './components/gallery/app.galleryComponent';
import { AddTrollComponent } from './components/add-troll/add-troll.component';
import { EditTrollComponent } from './components/edit-troll/edit-troll.component';
import { ListingsComponent } from './components/listings/listings.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAx0_EJELeGwYNS8YOsD1UiupYHXqtkdp4',
  authDomain: 'troll-5ef61.firebaseapp.com',
  databaseURL: 'https://troll-5ef61.firebaseio.com',
  storageBucket: 'troll-5ef61.appspot.com',
  messagingSenderId: '310950093295'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

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
    AddTrollComponent,
    EditTrollComponent,
    ListingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
