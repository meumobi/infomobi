import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Home', () => {
      page.getHomePageTitleText().then(title => {
        expect(title).toEqual('Home');
      });
    });
  })
});
