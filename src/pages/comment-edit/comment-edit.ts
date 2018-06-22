import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '@models/post.interface';

@IonicPage({
	name: 'comment-edit'
})
@Component({
  selector: 'page-comment-edit',
  templateUrl: 'comment-edit.html',
})
export class CommentEditPage {

  post: Post;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {  
    this.post = this.navParams.data.post;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentEditPage');
  }

}
