import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settingsFormGroup: FormGroup;
  language: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder,
    public translateService: TranslateService
  ) {
    
    this.language = this.translateService.currentLang;

    this.settingsFormGroup = this.fb.group({
      notification: '',
      language: ''
    });
  }

  selectLanguage(language: string) {
    this.translateService.use(language);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
