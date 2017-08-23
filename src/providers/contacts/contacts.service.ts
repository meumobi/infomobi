import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactsProvider {

    favorites: any = [];

    constructor(public http: Http) {
      console.log('Hello PostsProvider Provider');
    }

    findAll() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
          .map(res => res.json())
          .toPromise();
    }

    findById(id) {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .map(res => res.json())
          .toPromise();
    }

    findByName(searchKey: string) {

    }

    /*
      Should use localstorage to store favorites
    */
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
