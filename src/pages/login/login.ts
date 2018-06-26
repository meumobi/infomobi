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
import { AuthProvider } from '@providers/auth';
import { MeuToastProvider } from '@shared/meu-toast.service';
import { EmailValidator } from '@validators/email';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsProvider } from '@shared/analytics.service';

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
    public AuthProvider: AuthProvider,
    public menu : MenuController,
    public toast: MeuToastProvider,
    private translateService: TranslateService,
    public analytics: AnalyticsProvider,
  ) {
    this.user = this.fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  
  ionViewWillLeave(){
    this.menu.enable(true);
  }
  
  ionViewWillEnter(){
    this.menu.enable(false);
  }
  
  loginUser(user) {
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    
    this.AuthProvider.loginUser(user.value.email, user.value.password)
    .then( response => {
      this.analytics.trackEvent('Login', 'Submit', 'Success');
      this.translateService.get('LOGIN.USER_WELCOME', {displayName: response.visitor.first_name}).subscribe(
        value => {
          this.navCtrl.setRoot('HomePage');
          this.toast.present(value);
        }
      )
    })
    .catch ( err => {
      console.log(err);
      this.analytics.trackEvent('Login', 'Submit', 'Failed');
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: this.translateService.instant(err.error.error),
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });  
  }
}
