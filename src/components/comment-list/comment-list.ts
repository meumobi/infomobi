import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListComponent {
  @Output() fileUploadFinished = new EventEmitter(false);
  @Input('comments') comments;

  constructor() {

  }
}
