import { Injectable } from '@angular/core';

import comments from './mock-comments';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class CommentsProvider {

  search(filters, lastItem = null) {    
    return comments.map(
      comments => {
        return comments.filter(
          comment => comment.channel == filters.channel
        ) 
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