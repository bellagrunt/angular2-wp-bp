import { TrollPage } from './app.po';

describe('test about sanity', function() {
  var sanityPage = require("./e2e/sanityFunction_function.js")

  // beforeEach(() => {
  //   sanityPage = new TrollPage();
  // });

  it('should display message saying app works', () => {
    sanityPage.clickOnAbout();
    expect(sanityPage.getParagraphText()).toEqual('app works!');
  });
});
