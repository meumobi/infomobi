import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams } from 'ionic-angular';

import { meuToast } from '@shared/toast';

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
    public toast: meuToast,
  ) { }

  selectLanguage(language: string) {
    this.toast.present('Language successfully saved');
  }

}
