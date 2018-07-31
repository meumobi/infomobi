import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams } from 'ionic-angular';

import { MeuToastService } from '@shared/meu-toast.service';
import { AnalyticsProvider } from '@shared/analytics.service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage({
  segment: 'settings',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  language: string;
  bar = { "test": 'bar' };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public meuToastService: MeuToastService,
    public analytics: AnalyticsProvider,
    private translateService: TranslateService
  ) { 
    this.language = this.translateService.currentLang;
  }

  selectLanguage() {
    this.analytics.trackEvent('Settings', 'Language selected', this.language);
    
    this.translateService.get('Language successfully saved: ').subscribe(
      value => {
        // value is our translated string
        this.meuToastService.present(value + this.language);
      }
    )
    
    this.translateService.use(this.language); 
    /*
    this.translateService.addLangs(["en", "fr"]);
    this.translateService.setDefaultLang('en');

    let browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    */
  }

}
