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
}
