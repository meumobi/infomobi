import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProfile } from '@models/contact-profile';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage {
  id: string;
  user: UserProfile;
  images = [];
  files: Array<any>;
  uploadFinished = true;
  options: Array<string> = [];
  newProfile = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public ref: ChangeDetectorRef,
    public translateService: TranslateService
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
      if (!this.id) {
        // this.id = currentId;
      }
      // this.user = service.fetchById
      this.user = {
        _id: "pRlZLrdlMJqEgByefJcn",
        options: {
          landlinePhone: "(21) 4042-0755",
          mobilePhone: "(21) 96172-3672",
          email: "rh@infomobi.org"
        },
        created: 1532711442167,
        displayName: "Daniel Conte",
        email: "danconte72@gmail.com",
        firstName: "Daniel",
        isPublished: true,
        lastName: "Conte",
        birthdate: '07-05',
        modified: 1532711442167,
        published: 1532711442167,
        title: "",
        type: "user",
        picture: "",
        domain: "meumobi.com"
      }
      this.options = Object.keys(this.user.options);
    }   
  }
  
  addOption() {
    let alert = this.alertCtrl.create({
      title: this.translateService.instant('New contact'),
      inputs: [
        {
          name: 'key',
          placeholder: this.translateService.instant('Field')
        },
      ],
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
        },
        {
          text: this.translateService.instant('Save'),
          handler: (data) => {
            console.log(data);
            this.options.push(data.key);
          }
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
      //service.insert
    } else {
      //service.update
    }
    console.log(this.user);
    // this.navCtrl.pop();
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