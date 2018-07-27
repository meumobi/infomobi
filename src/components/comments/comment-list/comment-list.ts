import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListComponent {
  @Input('comments') comments;

  constructor() {}

}
