import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'articles',
  templateUrl: 'articles.html'
})
export class ArticlesComponent {
  @Input () item;
  rootNavCtrl: NavController;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log('missing id of author');
    }
  }
}
