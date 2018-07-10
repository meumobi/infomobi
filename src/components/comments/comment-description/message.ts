import { Component, Input } from '@angular/core';

import { CommentDescription } from '@models/comment-description.interface';

@Component({
  template: `
    <p>{{data}}</p>
  `
})
export class MessageComponent implements CommentDescription {
  @Input() data: any;

  constructor() {}

}