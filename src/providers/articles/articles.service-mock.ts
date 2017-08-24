import { Injectable } from '@angular/core';
import articles from './mock-articles';

import Utils from '../../shared/utils';

@Injectable()
export class ArticlesProvider {

  findAll() {
    return Promise.resolve(articles);
  }

  findById(id) {
    let data = Utils.lookup(articles);
    return Promise.resolve(data[id]);
  }

}
