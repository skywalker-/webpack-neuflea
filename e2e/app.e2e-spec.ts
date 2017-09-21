import { WebpackNeufleaPage } from './app.po';

describe('webpack-neuflea App', () => {
  let page: WebpackNeufleaPage;

  beforeEach(() => {
    page = new WebpackNeufleaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
