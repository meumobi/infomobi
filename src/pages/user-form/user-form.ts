import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProfile } from '@models/contact-profile';
import { TranslateService } from '@ngx-translate/core';
import { ContactsService } from '@providers/contacts';
import { UserProfileService } from '@providers/user-profile';

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage {
  id: string;
  user: UserProfile | any; //any for tests
  images = [];
  files: Array<any>;
  uploadFinished = true;
  options: Array<string> = [];
  newProfile = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public translateService: TranslateService,
    private contactsService: ContactsService,
    private userProfile: UserProfileService
  ) {
    this.id = this.navParams.data.id; 
    this.newProfile = this.navParams.data.new;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }
  
  ngOnInit(){
    if (this.newProfile) {
      this.user = new UserProfile();
    } else {
      console.log(this.id);
      if (!this.id) {
        this.id = this.userProfile.current$.value._id;
      }
      this.contactsService.findById(this.id).subscribe(
        data => {
          this.user = data;
          console.log(this.user);
          this.options = Object.keys(this.user.options);
        }
      )
    }   
  }
  
  addOption() {
    let alert = this.alertCtrl.create({
      title: this.translateService.instant('New Field'),
      inputs: [
        {
          name: 'key',
          placeholder: this.translateService.instant('Field')
        },
      ],
      buttons: [
        {
          text: this.translateService.instant('Save'),
          handler: (data) => {
            console.log(data);
            this.options.push(data.key);
          }
        },
        {
          text: this.translateService.instant('Cancel'),
        }
      ]
    });
    alert.present();
  }

  removeOption(key) {
    delete this.user.options[key];
    var index = this.options.indexOf(key);
    if (index > -1) {
      this.options.splice(index, 1);
    }
  }
  
  onSubmit() {
    if (this.newProfile) {
      this.contactsService.create(this.user)
      .then(() => this.navCtrl.pop());
    } else {
      this.contactsService.update(this.user)
      .then(() => this.navCtrl.pop());
    }
  }

  cancel() {
    this.navCtrl.pop();
  }

  fileUploadFinished(data) {
    this.user.picture = data;
    console.log(data);
    this.uploadFinished = true;
  }
  
  fileUploadStarted() {
    //TODO add spinner
    this.uploadFinished = false;
  }
  
}