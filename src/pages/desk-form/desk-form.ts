import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DeskProfile } from '@models/contact-profile';
import { TranslateService } from '@ngx-translate/core';
import { ContactsService } from '@providers/contacts';

@IonicPage()
@Component({
  selector: 'page-desk-form',
  templateUrl: 'desk-form.html',
})
export class DeskFormPage {
  id: string;
  desk: DeskProfile;
  images = [];
  files: Array<any>;
  uploadFinished = true;
  options: Array<string> = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public translateService: TranslateService,
    private profileService: ContactsService
  ) {
    this.id = this.navParams.data.id; 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeskFormPage');
  }
  
  ngOnInit(){
    if (!this.id) {
      this.desk = new DeskProfile();
      // this.id = currentId;
      
    } else {
      // this.user = service.fetchById
      this.profileService.findById(this.id).subscribe(
        data => {
          this.desk = data;
          this.options = Object.keys(this.desk.options);
        }
      )
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
    delete this.desk.options[key];
    var index = this.options.indexOf(key);
    if (index > -1) {
      this.options.splice(index, 1);
    }
  }
  
  onSubmit() {
    if (!this.id) {
      //service.insert
    } else {
      //service.update
    }
    console.log(this.desk);
    // this.navCtrl.pop();
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