import { SettingsService } from '@providers/settings';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Settings } from '@models/settings';
import { ImageAttribute } from 'ionic-image-loader';

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
    public settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.imageAttributes.push({
      element: 'class',
      value: 'logo'
    });

    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
    this.settings = this.settingsService.getSettingsObserver();
  }

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }

  openPage(page, params) {
    this.navCtrl.push(page, params);
  }
}
