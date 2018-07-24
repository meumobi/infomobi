import { Injectable } from '@angular/core';

import contacts from './mock-contacts';
import Utils from '@shared/utils';

@Injectable()
export class ContactsService {

  search() {
    return contacts;
  }

  findById(id) {
    let data = Utils.lookup(contacts);
    return Promise.resolve(data[id]);
  }

}


