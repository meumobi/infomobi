import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'desk',
  templateUrl: 'desk.html'
})
export class DeskComponent {
  @Input() contact: any;
  rootNavCtrl: NavController;
  admin: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
    // this.admin = currentuser.role == admin;
    this.admin = true;
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of author");
    }
  }
}
