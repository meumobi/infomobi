import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';

@IonicPage({
  segment: 'settings',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    public navCtrl: NavController
  ) {}

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }
}
