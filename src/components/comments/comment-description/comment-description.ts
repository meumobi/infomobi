import { Type } from '@angular/core';

export class CommentDescription {
  constructor(public component: Type<any>, public commment: any) {}
}