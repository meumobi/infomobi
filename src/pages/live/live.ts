import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Post } from './../../models/post.interface';
import { PostsProvider } from './../../providers/posts/';

@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {

  posts: Post[];
  rootNavCtrl: NavController;

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
        this.posts = data.reverse();
      },
      err => {
        console.log(err);
      }
    );
  }

  addPost() {
    this.rootNavCtrl.push(
      'post-live', {}
    );
  }
}
