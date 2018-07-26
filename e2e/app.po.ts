import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getHomePageTitleText() {
    return element(by.tagName('page-home')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  getSettinsPageTitleText(){
    return element(by.tagName('page-settings')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  getLoginPageButtonText(){
    return element(by.tagName('page-login')).element(by.tagName('ion-list')).element(by.tagName('button')).getText();
  }
}
