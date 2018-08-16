import { Injectable } from '@angular/core';

import posts from './mock-posts';
import Utils from '@shared/utils';
import { Post } from '@models/post.interface';

@Injectable()
export class PostsProvider {

  findAll() {
    return Promise.resolve(posts);
  }

  findById(id) {
    const data = Utils.lookup(posts);
    return Promise.resolve(data[id]);
  }

  findByCategory(id): Promise<Post[]> {
    const data = posts.filter(
      post => post.parent_id == id
    )
    return Promise.resolve(data);
  }

}
