import { Component, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment.interface';
import { Post } from '@models/post.interface';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'comment-form',
  templateUrl: 'comment-form.html'
})
export class CommentFormComponent {
  @Input('post') post: Post; 
  comment: Comment;

  images = [];
  files:Array<any>;
  uploadFinished = true;

  constructor(
    private commentsProvider: CommentsProvider,
    public navCtrl: NavController
  ) {
    this.comment = {
      author : {
        displayName: "Luiza Bittencourt",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      description: "",
      published: false 
    }    
  }

  ngOnChanges() {
    if (this.post) {
      this.comment.postId = this.post._id;
      this.comment.postTitle = this.post.title; 
      this.comment.published = false;
      this.comment.promoted = false;
    }    
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
