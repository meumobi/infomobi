import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Article } from './../../models/article.interface';
import { ArticlesProvider } from './../../providers/articles/';

@IonicPage({
  name: 'article-details',
  segment: 'article/details/:id'
})
@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {

  article: Article;

  constructor(
    private data: ArticlesProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
      let id = this.navParams.data.id;
      this.findById(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailsPage');
  }

  findById(id) {
    this.data.findById(id)
      .then(data => this.article = data)
      .catch(error => alert(error));
  }

}
