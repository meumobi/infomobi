import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Article } from './../../models/article.interface';
import { Post } from './../../models/post.interface';
import { ArticlesProvider } from './../../providers/articles/';
import { PostsProvider } from './../../providers/posts/';
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
  rootNavCtrl: NavController;
  article: any;
  posts:Post[];
  date:Moment;
  id: string;
  constructor(
    private articlesProvider: ArticlesProvider,
    private postsProvider: PostsProvider,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {      
      this.rootNavCtrl = navParams.get('rootNavCtrl');
      this.id = this.navParams.data.id;
      this.findById(this.id);
      this.fetchPosts(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailsPage');
  }

  fetchPosts(id){
    this.postsProvider.findByArticle(id).subscribe(
      data => {
        this.posts = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  removePost(id){
    this.postsProvider.remove(id).then(
      data => {
        this.presentToast('Comment Removed!');
      }
    );
  }

  promotePost(id){
    this.postsProvider.promote(id).then(
      data => {
        this.presentToast('Comment Promoted!');
      }
    );
  }

  addPost() {
    this.rootNavCtrl.push(
      'post-live', {
        articleId: this.id
      }
    );
  }

  findById(id) {
    this.articlesProvider.findById(id)
      .subscribe(data => {
        this.article = data;
        moment.locale('pt');
        this.date = moment.unix(this.article.created.sec);
      })
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
