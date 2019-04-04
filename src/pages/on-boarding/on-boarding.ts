import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AnalyticsProvider } from '@shared/analytics.service';

@IonicPage()
@Component({
  selector: 'page-on-boarding',
  templateUrl: 'on-boarding.html',
})
export class OnBoardingPage {
  showSkip = true;
  @ViewChild('slides') slides: Slides;
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage,
    public analytics: AnalyticsProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnBoardingPage');
  }

  startApp() {
    this.navCtrl.pop( {animate: true, direction: 'forward'})
    .then(
      () => this.navCtrl.push('UserFormPage').then(() => {
        this.storage.set('hasSeenOnBoarding', 'true');
      })
    );
    this.analytics.trackEvent('On Boarding', 'Edit Profile');
  }

  skip(index: number = null) {
    this.navCtrl.pop( {animate: true, direction: 'forward'}).then(() => {
      this.storage.set('hasSeenOnBoarding', 'true');
    });
    this.analytics.trackEvent('On Boarding', 'Skip', index);
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

}
