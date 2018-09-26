import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactsService } from '@providers/contacts/';
import { ContactProfile } from '@models/contact-profile';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileService } from '@providers/user-profile';

@IonicPage({
  segment: 'contacts'
})
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts: Array<ContactProfile>;
  rootNavCtrl: NavController;
  admin: boolean = false;

  constructor(
    private contactsService: ContactsService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    private userProfileService: UserProfileService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  addContact() {
    const alert = this.alertCtrl.create({
      title:  this.translateService.instant('Create'),
      message: this.translateService.instant('Do you want to create a User or Desk contact?'),
      buttons: [
        {
          text: this.translateService.instant('User'),
          handler: () => {
            this.rootNavCtrl.push("UserFormPage", {new: true});
          }
        },
        {
          text: this.translateService.instant('Desk'),
          handler: () => {
            this.rootNavCtrl.push("DeskFormPage");
          }
        }
      ]
    });
    alert.present(); 
  }

  ngOnInit() {
    this.admin = this.userProfileService.current$.value.role == "admin";
    this.search();
  }

  search() {
    this.contactsService.search().subscribe(
      data => {
        this.contacts = data;   
      },
      err => {
        console.log(err);
      }
    );
  }

  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
