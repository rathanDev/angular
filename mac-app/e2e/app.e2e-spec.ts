import { MacAppPage } from './app.po';

describe('mac-app App', function() {
  let page: MacAppPage;

  beforeEach(() => {
    page = new MacAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
