import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { homeComponent } from './home/app.homeComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { newsComponent } from './news/app.newsComponent';
import { contactComponent } from './contact/app.contactComponet';
import { loginComponent } from './login/app.loginComponent';

const appRoutes: Routes = [
     { path: '', component: homeComponent },
     { path: 'about', component: aboutComponent },
     { path: 'news', component: newsComponent },
     { path: 'contact', component: contactComponent },
     { path: 'login', component: loginComponent },
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