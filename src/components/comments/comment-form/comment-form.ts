import { Component, Input, OnInit } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment';
import { Item } from '@models/item.interface';
import { NavController } from 'ionic-angular';
import { UserProfile } from '@models/contact-profile';
import { UserProfileService } from '@providers/user-profile';

@Component({
  selector: 'comment-form',
  templateUrl: 'comment-form.html'
})
export class CommentFormComponent implements OnInit {
  @Input() item: Item;
  comment: Comment;
  files: Array<any>;
  uploadFinished = true;
  author: UserProfile;

  constructor(
    private commentsProvider: CommentsProvider,
    public navCtrl: NavController,
    private userProfile: UserProfileService
  ) {}

  ngOnInit() {
    this.author = this.userProfile.current$.value;
    this.comment = new Comment('message');
    this.comment.domain = this.userProfile.current$.value.domain;
    this.comment.data['author'] = this.author;
    if (this.item) {
      this.comment.data['itemDetails'] = {
        title: this.item.title,
        id: this.item._id,
      };
      this.comment.channel = `item_${this.item._id}`;
    }
  }

  fileUploadFinished(data) {
    this.comment.data['media'] = [{url: data}];
    this.uploadFinished = true;
  }

  fileUploadStarted() {
    // TODO add spinner
    this.uploadFinished = false;
  }

  onSubmit() {
    this.commentsProvider.save(this.comment);
    this.navCtrl.pop();
  }
}
