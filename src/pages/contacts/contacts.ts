import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '@providers/contacts/';
import { ContactProfile } from '@models/contact-profile';

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

  constructor(
    private contactsService: ContactsService,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
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
