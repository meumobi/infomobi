import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'contact-headline',
  templateUrl: 'contact-headline.html'
})
export class ContactHeadlineComponent {
  @Input("contact") contact;
  rootNavCtrl: NavController;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }
  
  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id
    });
  }
}
