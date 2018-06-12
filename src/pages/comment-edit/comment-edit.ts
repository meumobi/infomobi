import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment.interface';

@IonicPage({
	name: 'comment-edit'
})
@Component({
  selector: 'page-comment-edit',
  templateUrl: 'comment-edit.html',
})
export class CommentEditPage {

  comment: Comment;

  images = [];
  files:Array<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private commentsProvider: CommentsProvider
  ) {
    this.comment = {
      author : {
        displayName: "Luiza Bittencourt",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      description: "",
      published: true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentEditPage');
  }

  onSubmit() {
    this.commentsProvider.save(this.comment);
    this.navCtrl.pop();   
  }

}
