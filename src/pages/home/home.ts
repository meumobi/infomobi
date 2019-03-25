import { SettingsService } from '@providers/settings';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Settings } from '@models/settings';
import { ImageAttribute } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  live: any = 'LivePage';
  contacts: any = 'ContactsPage';
  items: any = 'ItemsPage';
  authData$: Observable<any>;
  settings: Observable<Settings>;
  imageAttributes: ImageAttribute[] = [];

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    public navCtrl: NavController,
    public settingsService: SettingsService,
    private storage: Storage,
  ) {}

  ngOnInit() {
    this.imageAttributes.push({
      element: 'class',
      value: 'logo'
    });

    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
    this.settings = this.settingsService.getSettingsObserver();
  }

  displayOnBoarding() {
    this.storage.get('hasSeenOnBoarding')
    .then(
      (hasSeenOnBoarding) => {
      console.log(hasSeenOnBoarding);
      if (!hasSeenOnBoarding) {
        this.openPage('OnBoardingPage', {});
      }
    });
  }

  ionViewDidLoad() {
    this.displayOnBoarding();
  }

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }

  openPage(page, params) {
    this.navCtrl.push(page, params);
  }
}
