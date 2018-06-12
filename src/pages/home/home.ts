import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { LivePage } from '@pages/live/live';
import { ContactsPage } from '@pages/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  live: any = LivePage;
  posts: any = 'PostsPage';
  contacts: any = ContactsPage;

  constructor(public navCtrl: NavController) {

  }

}
