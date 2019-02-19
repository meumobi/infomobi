import { UserProfileService } from '@providers/user-profile';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Settings } from '@models/settings';
import { SettingsService } from '@providers/settings';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@IonicPage({
  segment: 'settings',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage implements OnInit, OnDestroy {
  settings: Settings;
  settingsSubscription: Subscription;


  constructor(
    public navCtrl: NavController,
    private settingsService: SettingsService,
    private meutToastService: MeuToastService,
    private translateService: TranslateService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.settings = new Settings();

    this.settingsSubscription = this.settingsService.getSettingsObserver().subscribe(
      data => {
        console.log('Received from Settings Observer: ', data);
        if (!!data) {
          this.settings = data;
        }
      }
    );
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }

  ionViewCanEnter(): boolean {
    return this.userProfileService.isAdmin();
  }


  onSubmit() {
    this.settingsService.set(this.settings)
    .then(
      () => this.meutToastService.present(this.translateService.instant('SETTINGS.SUBMIT.SUCCESS'))
    )
    .catch( _ => {

    });
  }
}
