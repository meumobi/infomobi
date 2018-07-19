import { Injectable } from '@angular/core';

import comments from './mock-comments';

@Injectable()
export class CommentsProvider {

  search(searchTerms, loadMore) {
    return comments;
  }

  update(id, changes) {
    return new Promise((resolve) => resolve(true));
  }

  delete(id) {
    return new Promise((resolve) => resolve(true));
  }

  save(comment) {
    return new Promise((resolve) => resolve(true));
  }

  promote(comment) {
    return new Promise((resolve) => resolve(true));
  }
}