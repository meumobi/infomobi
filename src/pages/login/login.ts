import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  MenuController,
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    public menu : MenuController,
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

  loginUser() {

  }
}
