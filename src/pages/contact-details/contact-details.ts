import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contact } from './../../models/contact.interface';
import { ContactsProvider } from './../../providers/contacts/';

@IonicPage({
  name: 'contact-details',
  segment: 'contact/details/:id'
})
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  contact: Contact;

  constructor(
    private data: ContactsProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
      let id = this.navParams.data.id;
      this.findById(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }

  findById(id) {
    this.data.findById(id)
      .then(data => this.contact = data)
      .catch(error => alert(error));
  }

}
