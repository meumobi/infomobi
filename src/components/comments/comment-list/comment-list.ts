import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListComponent {
  @Output() update = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  @Output() promote = new EventEmitter(false);
  @Output() open = new EventEmitter(false);
  @Output() filter = new EventEmitter(false);
  @Input('comments') comments;

  constructor() {}

}
