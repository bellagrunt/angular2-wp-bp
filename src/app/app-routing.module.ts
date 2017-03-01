import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './components/home/app.homeComponent';
import { AboutComponent } from './components/about/app.aboutComponent';
import { NewsComponent } from './components/news/app.newsComponent';
import { ContactComponent } from './components/contact/app.contactComponet';
import { LoginComponent } from './components/login/app.loginComponent';
import { GalleryComponent } from './components/gallery/app.galleryComponent';
import { ListingsComponent } from './components/listings/listings.component';
import { AdminComponent } from './components/admin/admin.component';



const appRoutes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'news', component: NewsComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'login', component: LoginComponent },
     { path: 'gallery', component: GalleryComponent },
    //  { path: 'admin/:id', component: AdminComponent },
     { path: 'listings', component: ListingsComponent },
     { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}