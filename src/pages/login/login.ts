import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  MenuController,
  LoadingController, 
  Loading, 
  AlertController,
  App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { AuthProvider } from '../../providers';
// import { EmailValidator } from '../../validators/email';
// import { AppConfig } from './../../app/config/app.config';

@IonicPage({
    name: 'login',
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
    // public authData: AuthProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menu : MenuController,
    private _app: App,
    // public config: AppConfig
  ) {
    this.user = this.fb.group({
      email: ['', Validators.compose([Validators.required])], //, EmailValidator.isValid
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }
  
  ionViewWillEnter(){
    this.menu.enable(false);
  }

  loginUser(){
      // if (!this.user.valid){
      //   console.log(this.user.value);
      // } else {
        // this.authData.loginUser(this.user.value.email, this.user.value.password)
        // .then( authData => {
        //   this.navCtrl.setRoot('sites-list');
        // }, error => {
        //   this.loading.dismiss().then( () => {
        //     let alert = this.alertCtrl.create({
        //       message: error.message,
        //       buttons: [
        //         {
        //           text: "Ok",
        //           role: 'cancel'
        //         }
        //       ]
        //     });
        //     alert.present();
        //   });
        // });

        // this.loading = this.loadingCtrl.create({
        //   dismissOnPageChange: true,
        // });
        // this.loading.present();
      // }
  }
}
