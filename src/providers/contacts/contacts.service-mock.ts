import { Injectable } from '@angular/core';
import contacts from './mock-contacts';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class ContactsService {

  search(term): Observable<any[]>{
    console.log(term);
    return contacts.map(
      contacts => {
        return contacts
        .filter(contact => contact.displayName.toLowerCase().indexOf(term.toLowerCase()) > -1)
      }
    )
  }

  findById(id): Observable<any> {
    return contacts.map(
      contacts => {
        return contacts
        .filter(contact => contact._id == id)
      }
    ).map(
      data => {
        return data[0];
      }
    )
  }

  create(contact): Promise<any> {
    return Promise.resolve(contact);
  }

  update(contact): Promise<any> {
    return Promise.resolve(contact);
  }
  
}


