import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent {

  @Input('comment') comment;

  constructor() {
  }

  show() {
    this.comment.published = true;
  }

  hide() {
    this.comment.published = false;
  }

  setRead() {
    this.comment.answered = true;
  }

  setUnread() {
    this.comment.answered = false;    
  }

  promote() {
    this.comment.promoted = true;     
  }

  demote() {
    this.comment.promoted = false;    
  }

}
