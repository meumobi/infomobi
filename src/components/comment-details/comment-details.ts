import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent {
  
  @Input('comment') comment;
  @Output() update = new EventEmitter(false);
  @Output() open = new EventEmitter(false);

  constructor() {
  }

  togglePublished() {
    this.update.emit({
      published: !this.comment.published
    })
  }

  toggleAnswered() {
    this.update.emit({
      answered: !this.comment.answered
    })
  }

  togglePromoted() {
    this.update.emit({
      promoted: !this.comment.promoted
    })
  }


}
