import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/app.homeComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { NewsComponent } from './news/app.newsComponent';
import { ContactComponent } from './contact/app.contactComponet';
import { LoginComponent } from './login/app.loginComponent';
import { GalleryComponent } from './gallery/app.galleryComponent';

const appRoutes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'news', component: NewsComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'login', component: LoginComponent },
     { path: 'gallery', component: GalleryComponent },
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