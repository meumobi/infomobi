import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import { ApiService } from '@providers/api';
import { Category } from '@models/categories.interface';

@Injectable()
export class CategoriesService {

  private categories = [];

  constructor(
    public apiService: ApiService
  ) {}

  findAll(): Promise<Category[]>  {

    return this.apiService.performance().then(
      data => {
        if (data && data.categories) {
          this.categories = data.categories;
        }

        return this.categories;
      }
    );
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
