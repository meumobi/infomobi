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
import { MeuToastProvider } from '@shared/meu-toast.service';
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
    
    this.authService.signIn(user.value.email, user.value.password)
    .then( (response: Auth) => {
      console.log(response);
      this.analytics.trackEvent('Login', 'Submit', 'Success');
      this.translateService.get('LOGIN.USER_WELCOME', {displayName: response.visitor.first_name}).subscribe(
        value => {
          this.navCtrl.setRoot('HomePage');
          this.toast.present(value);
        }
      )
    })
    .catch ( (err: AuthError) => {
      console.log(err);
      this.analytics.trackEvent('Login', 'Submit', 'Failed');
      this.loading.dismiss().then( () => {
        if (err) {
          let alert = this.alertCtrl.create({
            message: this.translateService.instant(err.message),
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        }
      });
    });  
  }
}
