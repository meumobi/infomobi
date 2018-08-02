import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactsService } from '@providers/contacts/';
import { ContactProfile } from '@models/contact-profile';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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
  private searchTerm =new BehaviorSubject<string>('');
  admin: boolean = false;

  constructor(
    private contactsService: ContactsService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private translateService: TranslateService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  filter(term) {
    this.searchTerm.next(term);
  }

  addContact() {
    const alert = this.alertCtrl.create({
      title:  this.translateService.instant('Delete'),
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
    // this.admin = currentuser.role == admin
    this.admin = true;
    this.search();
    this.searchTerm
    .debounceTime(300)
    .distinctUntilChanged()
    .subscribe(term => this.search(term))
  }

  search(term:string = '') {
    this.contactsService.search(term).subscribe(
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
