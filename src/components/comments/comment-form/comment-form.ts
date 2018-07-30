import { Component, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment';
import { Post } from '@models/post.interface';
import { NavController } from 'ionic-angular';
import { Contact } from '@models/contact.interface';

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
  author: Contact;

  constructor(
    private commentsProvider: CommentsProvider,
    public navCtrl: NavController
  ) {}

  ngOnInit() {


    
    this.author = {
      id: "11",
      firstName: "Anna Carolina",
      displayName: "Anna Carolina Pacheco",
      lastName: "Pacheco",
      picture: "https://firebasestorage.googleapis.com/v0/b/ion-employee.appspot.com/o/carol.png?alt=media&token=d8ae50b2-9d27-4f90-bfe1-256b99a59ae2"
    }
    this.comment = new Comment("Message");
    this.comment.data["author"] = this.author;
    
    if (this.post) {
      this.comment.data["postDetails"] = {
        title: this.post.title,
        id: this.post._id,
      }
      this.comment.channel = `post_${this.post._id}`;
    }    
  }

  fileUploadFinished(data) {
    this.comment.data["media"] = [{url:data}];
    console.log(data);
    this.uploadFinished = true;
  }

  fileUploadStarted() {
    //TODO add spinner
    this.uploadFinished = false;
  }

  onSubmit() {
    console.log(this.comment);
    this.commentsProvider.save(this.comment);
    this.navCtrl.pop();   
  }

}


