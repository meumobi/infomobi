import { SettingsService } from '@providers/settings';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { AuthUser } from '@models/auth.interface';
import { Settings } from '@models/settings';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  live: any = 'LivePage';
  contacts: any = 'ContactsPage';
  items: any = 'ItemsPage';
  authData$: Observable<any>;
  authUser: AuthUser = null;
  settings: Settings;
  settingsSubscription: Subscription;

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    public navCtrl: NavController,
    public settingsService: SettingsService
  ) {}

  ngOnInit() {
    console.log('HomePage ngOnInit');
    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
    this.authDataPersistenceService.getAuthDataObserver().subscribe(
      data => {
        if (data) {
          this.authUser = data.visitor;
        } else {
          this.authUser = null;
        }
      }
    );

    this.settingsSubscription = this.settingsService.getSettingsObserver().subscribe( data => {
      this.settings = data;
    });
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }

  openPage(page, params) {
    this.navCtrl.push(page, params);
  }

  pushVideosPage(channelId: string) {
    this.navCtrl.push('VideosPage', {
      channelId: channelId
    });
  }
}
