import { PushNotificationService } from '@providers/push-notification/push-notification';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnalyticsProvider } from '@shared/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@providers/auth';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { UserProfileService } from '@providers/user-profile';
import { ENV } from '@env';
import { Observable } from 'rxjs';
import { Auth, AuthUser } from '@models/auth.interface';
import { Category } from '@models/categories.interface';
import { CategoriesService } from '@providers/categories';
import moment from 'moment';
import 'moment/min/locales';
/**
 * TODO: load only required locales
 * Need a refactoring to normalize preferredLanguages with locales names (pt vs pt-br, en vs en-gb, etc.)
 */
// import 'moment/locale/pt-br';

declare var OneSignal: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage = 'HomePage';
  pages: Array<{title: string, component: any, icon: string}>;
  categories: Array<Category>;
  authData$: Observable<Auth>;
  authUser: AuthUser = null;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public analyticsProvider: AnalyticsProvider,
    private translateService: TranslateService,
    private authService: AuthService,
    private authDataPersistenceService: AuthDataPersistenceService,
    private userProfileService: UserProfileService,
    private categoriesService: CategoriesService,
    private pushNotificationService: PushNotificationService
  ) {
    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'home' },
    ];
    console.log('Env is production ? ' + ENV.production);
  }

  ngOnInit() {

    this.listenAuthData();
    this.loadMenuCategories();
    this.authDataPersistenceService.getAuthDataObserver().subscribe(
      data => {
        if (data) {
          this.authUser = data.visitor;
        } else {
          this.authUser = null;
        }
      }
    );
  }

  webPushInit() {
    OneSignal.push(function() {
      OneSignal.init({
        appId: ENV.onesignal.appId,
        autoRegister: false,
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: false,
        }
      });
    });
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.translateService.setDefaultLang('en');
      this.analyticsProvider.startTrackerWithId(ENV.analyticsTrackingId);
      this.nav.viewDidEnter.subscribe(
        (view) => {
          this.analyticsProvider.trackView(view.instance.constructor.name);
        }
      );
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (!this.platform.is('cordova')) {
        this.webPushInit();
      }
    });
  }

  loadMenuCategories() {
    this.categoriesService.findAll()
    .then(
      data => {
        this.categories = data;
      }
    );
  }

  listenAuthData() {
    this.authData$.subscribe( authData => {
      if (!!authData) {
        if (this.platform.is('cordova')) {
          this.pushNotificationService.register(ENV.onesignal.appId, ENV.onesignal.googleProjectNumber);
          this.pushNotificationService.signInUser(authData);
        } else {
          OneSignal.push(function() {
            OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {
              if (isEnabled) {
                console.log('Push notifications are enabled!');
              } else {
                console.log('Push notifications are not enabled yet.');
              }
            });
          });
          OneSignal.push(function() {
            OneSignal.getUserId().then(function(userId) {
              console.log('OneSignal User ID:', userId);
              // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316
            });
          });

          OneSignal.getNotificationPermission().then(function(permission) {
            console.log('Site Notification Permission:', permission);
          });
          OneSignal.registerForPushNotifications();
        }

        this.userProfileService.fetchByEmail(authData.visitor.email).subscribe(
          userProfile => {
            if (userProfile) {
              if (userProfile.preferredLanguage) {
                this.translateService.use(userProfile.preferredLanguage);
                moment.locale(userProfile.preferredLanguage);
              }
            } else {
              /*
              If userProfile not exists create it
              */
              this.userProfileService.create(authData.visitor)
              .then(
                () => {
                console.log('user profile successfully created');
                },
                error => {
                  console.error(error);
                }
              );
            }
          }
        );
      } else {
        this.nav.setRoot('LoginPage');
      }
    });
  }

  logout() {
    if (this.platform.is('cordova')) {
      this.pushNotificationService.signOutUser().then( _ => {
        this.authService.signOut();
      });
    } else {
      this.authService.signOut();
    }
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.nav.push(page, {
        id: id,
        rootNavCtrl: this.nav
      });
    } else {
      console.log('missing id');
    }
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
