import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Article } from './../../models/article.interface';
import { ArticlesProvider } from './../../providers/articles/';
import * as moment from 'moment';
import { Moment } from 'moment';

@IonicPage({
  name: 'article-details',
  segment: 'article/details/:id'
})
@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {

  article: any;
  date:Moment;
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
      .subscribe(data => {
        this.article = data;
        moment.locale('pt');
        this.date = moment.unix(this.article.created.sec);
      })
  }

}
