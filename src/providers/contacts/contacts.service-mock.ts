import { Injectable } from '@angular/core';
import contacts from './mock-contacts';

@Injectable()
export class ContactsService {

  search(term) {
    console.log(term);
    return contacts.map(
      contacts => {
        return contacts
        .filter(contact => contact.displayName.toLowerCase().indexOf(term.toLowerCase()) > -1)
      }
    )
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


