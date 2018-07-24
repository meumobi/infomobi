import { Injectable } from '@angular/core';
import contacts from './mock-contacts';

@Injectable()
export class ContactsService {

  search() {
    return contacts;
  }

  findById(id) {
    return contacts.map(
      contacts => {
        return contacts
        .filter(contact => contact.id == id)
      }
    ).map(
      data => {
        return data[0];
      }
    )
  }
}


