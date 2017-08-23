import { Injectable } from '@angular/core';
import contacts from './mock-contacts';

@Injectable()
export class ContactsProvider {

  favorites: any = [];

  findAll() {
    return Promise.resolve(contacts);
  }

  findById(id) {
    return Promise.resolve(contacts[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(contacts.filter((contact: any) =>
        (contact.title +  ' ' +contact.address +  ' ' + contact.city + ' ' + contact.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(contact) {
    this.favorites.push(contact);
    return Promise.resolve();
  }

  unfavorite(contact) {
    let index = this.favorites.indexOf(contact);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
