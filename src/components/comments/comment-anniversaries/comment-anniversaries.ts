import { Component, Input } from '@angular/core';
import { Anniversaries } from '@models/comment.interface';

@Component({
  selector: 'comment-anniversaries',
  templateUrl: 'comment-anniversaries.html'
})
export class CommentAnniversariesComponent {

  @Input('content') content: Anniversaries;

  constructor() {
    console.log('Hello CommentAnniversariesComponent Component');
  }

}
