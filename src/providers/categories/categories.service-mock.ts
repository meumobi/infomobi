import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import categories from './mock-categories';

@Injectable()
export class CategoriesService {

  findAll() {
    return Promise.resolve(categories);
  }

  findById(id) {
    let data = Utils.lookup(categories);
    return Promise.resolve(data[id]);
  }

}