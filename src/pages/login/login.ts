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
    if (!this.user.valid) {
      this.toast.present('Invalid Email or password');
    } else {
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
      
      this.AuthProvider.loginUser(user.email, user.password)
      .then( (response) => {
        this.toast.present(JSON.stringify(response));
      })
      .catch ( (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
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
}
