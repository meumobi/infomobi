import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/#/settings');
    });

    it('should have a title saying live', () => {
      page.getSettinsPageTitleText().then(title => {
        expect(title).toEqual('Configuração');
      });
    });
  })
});
