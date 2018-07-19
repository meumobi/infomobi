import { Injectable } from '@angular/core';

import contacts from './mock-contacts';
import Utils from '@shared/utils';

@Injectable()
export class ContactsService {

  findAll() {
    return Promise.resolve(contacts);
  }

  findById(id) {
    let data = Utils.lookup(contacts);
    return Promise.resolve(data[id]);
  }

}
