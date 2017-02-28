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
import { AdminComponent } from './admin/admin.component';
import { AddTrollComponent } from './add-troll/add-troll.component';
import { EditTrollComponent } from './edit-troll/edit-troll.component';

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
    AdminComponent,
    AddTrollComponent,
    EditTrollComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
