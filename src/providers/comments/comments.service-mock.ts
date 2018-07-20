import { Injectable } from '@angular/core';
import comments from './mock-comments';

@Injectable()
export class CommentsProvider {

  search(filters, lastItem = null) {    
    return comments
    .map(
      comments => {
        comments.sort(
          (a, b) => {
            return a.published > b.published ? -1 : 1;
          }
        )
        return comments.filter(
          comment => comment.channel == filters.channel
        )
      }
    )
    .map(
      comments => {
        let start = 0;
        if (lastItem) {
          start = comments.indexOf(lastItem) + 1;
        }
        return comments.slice(start, start + 3);
      }
    );
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