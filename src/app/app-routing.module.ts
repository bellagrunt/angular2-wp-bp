import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { homeComponent } from './home/app.homeComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { newsComponent } from './news/app.newsComponent';
import { contactComponent } from './contact/app.contactComponet';
import { loginComponent } from './login/app.loginComponent';
import { galleryComponent } from './gallery/app.galleryComponent';

const appRoutes: Routes = [
     { path: '', component: homeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'news', component: newsComponent },
     { path: 'contact', component: contactComponent },
     { path: 'login', component: loginComponent },
     { path: 'gallery', component: galleryComponent },
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