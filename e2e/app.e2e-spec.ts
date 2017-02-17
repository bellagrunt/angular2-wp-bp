import { TrollPage } from './app.po';

describe('troll App', () => {
  let page: TrollPage;

  beforeEach(() => {
    page = new TrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
