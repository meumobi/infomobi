import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '@models/contact.interface';
import { ContactsProvider } from '@providers/contacts/';

@IonicPage({
  segment: 'contacts'
})
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts: Array<any>;
  rootNavCtrl: NavController;

  constructor(
    private data: ContactsProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findAll();
  }

  findAll() {
    this.data.findAll()
      .then(data => this.contacts = data)
      .catch(error => alert(error));
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
