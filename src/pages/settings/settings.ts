import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Settings } from '@models/settings';
import { SettingsService } from '@providers/settings';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage({
  segment: 'settings',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage implements OnInit {
  settings: Settings;

  constructor(
    public navCtrl: NavController,
    private settingsService: SettingsService,
    private meutToastService: MeuToastService,
    private translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.settingsService.getSettings().subscribe(
      data => {
        console.log(data);
        this.settings = data;
      }
    );
  }

  onSubmit() {
    this.settingsService.setSettings(this.settings)
    .then(
      () => this.meutToastService.present(this.translateService.instant('SETTINGS.SUBMIT.SUCCESS'))
    )
    .catch( _ => {

    });
  }

  cancel() {
    this.navCtrl.pop();
  }

}
