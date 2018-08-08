import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DeskProfile, ContactProfile } from '@models/contact-profile';
import { TranslateService } from '@ngx-translate/core';
import { ContactsService } from '@providers/contacts';

@IonicPage()
@Component({
  selector: 'page-desk-form',
  templateUrl: 'desk-form.html',
})
export class DeskFormPage {
  id: string;
  desk: ContactProfile;
  images = [];
  files: Array<any>;
  uploadFinished = true;
  options: Array<string> = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public translateService: TranslateService,
    private contactsService: ContactsService
  ) {
    this.id = this.navParams.data.id; 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeskFormPage');
  }
  
  ngOnInit(){
    if (!this.id) {
      this.desk = new DeskProfile();
    } else {
      this.contactsService.findById(this.id).subscribe(
        data => {
          this.desk = data;
          this.options = Object.keys(this.desk.options);
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
    delete this.desk.options[key];
    var index = this.options.indexOf(key);
    if (index > -1) {
      this.options.splice(index, 1);
    }
  }
  
  onSubmit() {
    if (!this.id) {
      this.contactsService.create(this.desk)
      .then(() => this.navCtrl.pop());
    } else {
      this.contactsService.update(this.desk)      
      .then(() => this.navCtrl.pop());
    }
  }
  
  cancel() {
    this.navCtrl.pop();
  }
  
  fileUploadFinished(data) {
    this.desk.picture = data;
    console.log(data);
    this.uploadFinished = true;
  }
  
  fileUploadStarted() {
    //TODO add spinner
    this.uploadFinished = false;
  }
  
}