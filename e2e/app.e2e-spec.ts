import { HomePage } from './app.po';
import { browser, element, by } from 'protractor';

var protractor_1 = require('protractor');
describe('test about sanity', function() {
  var sanityPage = require("../e2e/functions/sanityFunction_function.js")

  browser.ignoreSynchronization = true;
  browser.get('http://localhost:4200/about');
  // browser.sleep(10000); 
  // beforeEach(() => {
  //   return browser.get('http://localhost:4200/');
  // });
  

  it('should display message saying app works', () => {
    sanityPage.clickOnHome();
    expect(sanityPage.validateHome()).toEqual('Home');
  });

});
