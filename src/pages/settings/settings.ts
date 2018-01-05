import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  language: String;
  notification: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translateService: TranslateService
  ) {
    this.language = this.translateService.currentLang;
  }

  selectLanguage(language: string) {
    this.translateService.use(language);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
