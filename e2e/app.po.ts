import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('http://localhost:4200/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
