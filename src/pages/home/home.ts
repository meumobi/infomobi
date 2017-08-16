import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LivePage } from './../live/live';
import { LatestPage } from './../latest/latest';
import { ContactsPage } from './../contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  live: any = LivePage;
  latest: any = LatestPage;
  contacts: any = ContactsPage;

  constructor(public navCtrl: NavController) {

  }

}
