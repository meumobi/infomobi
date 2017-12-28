import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LatestPage } from '../pages/latest/latest';

import { CategoriesProvider } from '../providers/categories/';
import { Category } from '../models/category.interface';
import { User } from '../models/User.interface';


import 'rxjs/add/operator/map';
import { 
  FirebaseListObservable, 
} from 'angularfire2/database';

import firebase from 'firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user: User;
  rootPage: any;
  pages: Array<{title: string, component: any}>;
  categories: FirebaseListObservable<Category>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private translate: TranslateService,
    private categoriesProvider: CategoriesProvider,
  ) {
    ///
    //firebase.initializeApp(FIREBASE_CONFIG);
    ///
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

    if (this.user) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }

    this.categories = this.categoriesProvider.findAll();


  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 logout() {
    this.nav.setRoot(LoginPage);
    
  }

  openCategory(id){
    this.nav.push(LatestPage, {
      id: id,
      rootNavCtrl: this.nav
    });
  }

  openSettings() {
    this.nav.push('SettingsPage');
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
