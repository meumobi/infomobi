import { Injectable } from '@angular/core';

import items from './mock-items';
import Utils from '@shared/utils';
import { Item } from '@models/item.interface';

@Injectable()
export class ItemsService {

  fetchAll():Promise<Item[]> {
    return Promise.resolve(items.items);
  }

  fetchById(id):Promise<Item> {
    let data = Utils.lookup(items.items);
    return Promise.resolve(data[id]);
  }

  fetchByCategory(id): Promise<Item[]> {
    const data = items.items.filter(
      post => post.parent_id == id
    )
    return Promise.resolve(data);
  }

}
