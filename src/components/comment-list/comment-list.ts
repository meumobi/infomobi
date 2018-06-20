import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListComponent {
  @Output() update = new EventEmitter(false);
  @Input('comments') comments;

  constructor() {
    console.log(this.comments);
  }
   
}
