import { Injectable } from '@angular/core';
import contacts from './mock-contacts';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  search(): Observable<any[]>{
    return contacts.map(
      contacts => {
        return contacts
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