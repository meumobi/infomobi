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
      this.data.findAll()
        .then(data => {
          this.articles = data;
          console.log(data);
        })
        .catch(error => alert(error));
  }

  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id
    });
  }

}
