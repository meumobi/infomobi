import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams } from 'ionic-angular';

import { MeuToastProvider } from '@shared/meu-toast.service';
import { AnalyticsProvider } from '@shared/analytics.service';

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
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: MeuToastProvider,
    public analytics: AnalyticsProvider,
  ) { }

  selectLanguage(language: string) {
    this.analytics.trackEvent('Settings', 'Language selected', language);
    this.toast.present('Language successfully saved');
  }

}
