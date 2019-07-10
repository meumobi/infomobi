import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import performance from './mock-performance';

import { Category } from '@models/categories.interface';

@Injectable()
export class CategoriesService {

  private categories = [];

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesService Service');
  }

  findAll(): Promise<Category[]>  {
    this.categories = performance.categories;

    return Promise.resolve(this.categories);
  }

  findById(id): Promise<Category> {
    const data = Utils.lookup(this.categories);
    return Promise.resolve(data[id]);
  }

  getCategoryName(id): Promise<string> {
    const data = Utils.lookup(this.categories);
    const title = data[id] ? data[id].title : null;

    return Promise.resolve(title);
  }
}
