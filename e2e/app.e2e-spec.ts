import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/#/login');
    });

    it('should have a button saying login', () => {
      page.getLoginPageButtonText().then(title => {
        expect(title).toEqual('LOGIN');
      });
    });
  })
});
