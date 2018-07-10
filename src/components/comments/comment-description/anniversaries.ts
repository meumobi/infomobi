import { Component, Input } from '@angular/core';

import { CommentDescription } from '@models/comment-description.interface';

@Component({
  template: `
    <p>Hello anniversaries</p>
  `
})
export class AnniversariesComponent implements CommentDescription {
  @Input() data: any;

  constructor() {}

}