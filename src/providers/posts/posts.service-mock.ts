import { Injectable } from '@angular/core';

import posts from './mock-posts';
import Utils from '@shared/utils';

@Injectable()
export class PostsProvider {

  findAll() {
    return Promise.resolve(posts);
  }

  findById(id) {
    let data = Utils.lookup(posts);
    return Promise.resolve(data[id]);
  }

}
