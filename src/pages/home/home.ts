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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page);
  }
}
