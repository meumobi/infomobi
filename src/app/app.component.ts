import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnalyticsProvider } from '@shared/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@providers/auth';
import { AuthDataPersistenceService } from '@providers/auth-data-presistence';
import { UserProfileService } from '@providers/user-profile';
import { ENV } from '@env';
import { MeuToastProvider } from '@shared/meu-toast.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: string = 'HomePage';
  pages: Array<{title: string, component: any}>;
  
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public analyticsProvider: AnalyticsProvider,
    private translateService: TranslateService,
    private authService: AuthService,
    private authDataPersistenceService: AuthDataPersistenceService,
    private userProfileService: UserProfileService,
    public meuToastService: MeuToastProvider,
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
      //this.translateService.use('pt'); 
      
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
  
  ngOnInit() {
    this.authDataPersistenceService.isLoggedSubject.subscribe( isLogged => {
      if (isLogged) {
        this.authDataPersistenceService.get().then( authData => {
          this.userProfileService.fetchByEmail(authData.visitor.email).subscribe(
            userProfile => {
              if (userProfile) {
                console.log(userProfile);        
                if (userProfile.preferredLanguage){
                  this.translateService.use(userProfile.preferredLanguage); 
                }
                this.meuToastService.present('Hello ' + userProfile.displayName);
                //this.nav.setRoot('HomePage');
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
                )
              }
            }
          )
        })
      } else {
        this.nav.setRoot('LoginPage');
      } 
    })
    
    
  }
  
  ngOnDestroy() {
    this.authDataPersistenceService.isLoggedSubject.unsubscribe();
  }
  
  logout() {
    this.authService.signOut();
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
