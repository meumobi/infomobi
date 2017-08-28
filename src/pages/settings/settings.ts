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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder
  ) {
    this.settingsFormGroup = this.fb.group({
      notification: '',
      language: ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
