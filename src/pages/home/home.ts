import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PostsPage } from '@pages/posts/posts';
import { ContactsPage } from '@pages/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any = PostsPage;
  contacts: any = ContactsPage;

  constructor(public navCtrl: NavController) {

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page);
  }

}
