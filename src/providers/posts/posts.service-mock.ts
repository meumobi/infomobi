import { Injectable } from '@angular/core';

import posts from './mock-posts';
import Utils from '@shared/utils';
import { Post } from '@models/post.interface';

@Injectable()
export class PostsProvider {

  findAll():Promise<Post[]> {
    return Promise.resolve(posts.items);
  }

  findById(id):Promise<Post> {
    let data = Utils.lookup(posts.items);
    return Promise.resolve(data[id]);
  }

}
