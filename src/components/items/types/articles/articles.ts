import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import items from '@providers/items/mock-items';

@Component({
  selector: 'articles',
  templateUrl: 'articles.html'
})
export class ArticlesComponent implements OnInit {
  @Input () item;
  rootNavCtrl: NavController;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  ngOnInit() {
    if (this.item.thumbnails && this.item.thumbnails.length) {
      this.item.thumbnailUrl = this.item.thumbnails[this.item.thumbnails.length - 1].url;
    }
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
