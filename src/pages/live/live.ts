import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Post } from './../../models/post.interface';
import { PostsProvider } from './../../providers/posts/';

@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  
  @ViewChild(Content) content: Content;
  posts: Post[];
  rootNavCtrl: NavController;
  fakePosts: Array<any> = new Array(5);

  constructor(
    private data: PostsProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findAll();
  }

  findAll() {
    this.data.findAll().subscribe(
      data => {
        this.posts = data;
        this.content.scrollToTop(500);
      },
      err => {
        console.log(err);
      }
    );
  }

  viewArticle(id: string){
    this.rootNavCtrl.push('article-details', {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }

  addPost() {
    this.rootNavCtrl.push(
      'post-live', {}
    );
  }
}
