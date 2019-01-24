import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  MenuController,
  LoadingController,
  Loading,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@providers/auth';
import { MeuToastService } from '@shared/meu-toast.service';
import { EmailValidator } from '@validators/email';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsProvider } from '@shared/analytics.service';
import { Auth, AuthError } from '@models/auth.interface';

@IonicPage({
  segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: FormGroup; // = {} as IUser;
  loading: Loading;
  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public menu: MenuController,
    public meuToastService: MeuToastService,
    private translateService: TranslateService,
    private authDataPersistenceService: AuthDataPersistenceService,
    public analytics: AnalyticsProvider,
  ) {
    this.user = this.fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewCanEnter(): boolean {
    const isAuth = this.authDataPersistenceService.isAuthenticated();

    /**
     * workaround to redirect on ionViewCanEnter
     * see https://github.com/ionic-team/ionic/issues/11405#issuecomment-365163495
     */
    if (isAuth) {
      setTimeout(() => this.navCtrl.setRoot('HomePage'), 0);
    }

    return !isAuth;
  }

  loginUser(user) {
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();

    this.authService.signIn(user.value.email, user.value.password)
    .then( (response: Auth) => {
      console.log(response);
      this.analytics.trackEvent('Login', 'Submit', 'Success');
      this.translateService.get('LOGIN.USER_WELCOME', {displayName: response.visitor.first_name}).subscribe(
        value => {
          this.meuToastService.present(value);
          this.navCtrl.setRoot('HomePage');
        }
      );
    })
    .catch ( (err: AuthError) => {
      console.log(err);
      this.analytics.trackEvent('Login', 'Submit', 'Failed');
      this.loading.dismiss().then( () => {
        if (err) {
          if (err.message === 'passwordExpired') {
            this.updatePassword(user.value.email, user.value.password)
            .then(() => {
              console.log('UpdatePassword resolved');
              this.navCtrl.setRoot('HomePage');
            })
            .catch(() => {
              console.log('UpdatePassword rejected');
            });
            return;
          }
          const alert = this.alertCtrl.create({
            message: this.translateService.instant(err.message),
            buttons: [
              {
                text: 'Ok',
                role: 'cancel'
              }
            ]
          });
          alert.present();
        }
      });
    });
  }

  updatePassword(email: string, currentPassword: string) {
    return new Promise((resolve, reject) => {
      const prompt = this.alertCtrl.create({
        title: this.translateService.instant('Update password'),
        message: this.translateService.instant('LOGIN.OTP_DISCLAIMER'),
        enableBackdropDismiss: false,
        inputs: [
          {
            type: 'password',
            name: 'newPassword',
            placeholder: this.translateService.instant(' New password')
          },
        ],
        buttons: [
          {
            text: this.translateService.instant('Cancel'),
            handler: data => {
              console.log('Cancel clicked');
              this.loading.dismiss();
              this.authService.signOut();
              reject();
            }
          }, {
            text: this.translateService.instant('Save'),
            handler: data => {
              console.log('OK clicked');
              this.authService.updatePassword(email, currentPassword, data.newPassword)
            .then(
              () => {
                this.meuToastService.present(this.translateService.instant('Password updated'));
                resolve();
              }
            )
            .catch(err => {
              console.log(err, 'New password failed!');
              reject();
            });
            }
          }
        ]
      });

      prompt.present();
    });
  }
}
