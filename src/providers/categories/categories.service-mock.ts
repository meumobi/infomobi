import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import categories from './mock-categories';
import { Category } from '@models/categories.interface';

@Injectable()
export class CategoriesService {

  findAll(): Promise<Category[]>  {
    let data = categories.filter(
      category => category.visibility == 1
    )
    return Promise.resolve(data);
  }

  findById(id): Promise<Category> {
    let data = Utils.lookup(categories);
    return Promise.resolve(data[id]);
  }

  getCategoryName(id): Promise<string> {
    let data = Utils.lookup(categories);
    return Promise.resolve(data[id].title);
  }
}