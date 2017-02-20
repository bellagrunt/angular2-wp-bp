import { Component } from '@angular/core';
import { headerComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';
import { homeComponent } from './home/app.homeComponent';
import { navComponent } from './nav/app.navComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { newsComponent } from './news/app.newsComponent';
import { contactComponent } from './contact/app.contactComponet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
