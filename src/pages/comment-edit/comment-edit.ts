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
  uploadFinished = true;

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
    this.comment.postId = ((this.navParams.data.postId) ? this.navParams.data.postId : null);
    this.comment.postTitle = ((this.comment.postId) ? this.navParams.data.articleTitle : null); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentEditPage');
  }

  fileUploadFinished(data) {
    this.comment.media = data;
    console.log(data);
    this.uploadFinished = true;
  }

  fileUploadStarted() {
    //TODO add spinner
    this.uploadFinished = false;
  }

  onSubmit() {
    this.commentsProvider.save(this.comment);
    this.navCtrl.pop();   
  }

}
