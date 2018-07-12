import { Component, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment';
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
  ) {}

  ngOnInit() {
    this.comment = new Comment("UserComment");
    this.comment.data["media"] = [];
    if (this.post) {
      this.comment.data["postDetails"] = {
        title: this.post.title,
        id: this.post._id,
      }
      this.comment.channel = `post_${this.post._id}`;
    }    
  }

  fileUploadFinished(data) {
    this.comment.data.media.push({url:data});
    console.log(data);
    this.uploadFinished = true;
  }

  fileUploadStarted() {
    //TODO add spinner
    this.uploadFinished = false;
  }

  onSubmit() {
    console.log(this.comment);
    // this.commentsProvider.save(this.comment);
    // this.navCtrl.pop();   
  }

}


