import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Article } from './../../models/article.interface';
import { ArticlesProvider } from './../../providers/articles/';

@Component({
  selector: 'page-latest',
  templateUrl: 'latest.html',
})
export class LatestPage {

  categoryId;
  articles: Array<Article>;
  rootNavCtrl: NavController;

  constructor(
    private articlesProvider: ArticlesProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.categoryId = navParams.data.id;
    this.listArticles();
  }

  listArticles(refresher = null){
    if (this.categoryId){
      this.articlesProvider.findByCategory(this.categoryId).then(
        data => {
          this.articles = data;
          if (refresher) {
            refresher.complete();
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.articlesProvider.findAll().then(
        data => {
          this.articles = data;
          if (refresher) {
            refresher.complete();
          }
        }
      );
    }
  }
  
  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }

}
