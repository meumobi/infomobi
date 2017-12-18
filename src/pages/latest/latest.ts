import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Article } from './../../models/article.interface';
import { ArticlesProvider } from './../../providers/articles/';

@Component({
  selector: 'page-latest',
  templateUrl: 'latest.html',
})
export class LatestPage {

  articles: Array<Article>;
  rootNavCtrl: NavController;

  constructor(
    private data: ArticlesProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findAll();
  }

  findAll() {
    this.data.findAll().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
    pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }

}
