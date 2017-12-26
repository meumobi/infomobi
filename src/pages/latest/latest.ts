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

  listArticles() {
    if (this.categoryId){
      this.articlesProvider.findByCategory(this.categoryId).subscribe(
        data => {
          this.articles = data;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.articlesProvider.findAll().subscribe(
        data => {
          this.articles = data;
        },
        err => {
          console.log(err);
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
