import { MockingjayPage } from './app.po';

describe('mockingjay App', function() {
  let page: MockingjayPage;

  beforeEach(() => {
    page = new MockingjayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
