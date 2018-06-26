import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnalyticsProvider } from '@shared/analytics.service';
import { TranslateService } from '@ngx-translate/core';

import { ENV } from '@env';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public analyticsProvider: AnalyticsProvider,
    private translateService: TranslateService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'List', component: 'PostsPage' },
    ];
    console.log("Env is production ? " + ENV.production);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.translateService.setDefaultLang('en');
      this.translateService.use('pt'); 

      this.analyticsProvider.startTrackerWithId(ENV.analyticsTrackingId);
      this.nav.viewDidEnter.subscribe(
        (view) => {
          this.analyticsProvider.trackView(view.instance.constructor.name);
        }
      );


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.nav.setRoot('LoginPage');
  }

  openPage(pageComponent, push = true) {
    if (push) {
      this.nav.push(pageComponent);
    } else {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario

      this.nav.setRoot(pageComponent, {
        'id': 123
      });
    }
  }
}
