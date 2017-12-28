import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { 
  AngularFireDatabase, 
  FirebaseListObservable
} from 'angularfire2/database';

import { Post } from './../../models/post.interface';

@Injectable()
export class PostsProvider {
  
  items$: FirebaseListObservable<Post[]>;
  
  constructor(private af: AngularFireDatabase) {

  }

  findAll(): FirebaseListObservable<Post[]> {
    this.items$ = this.af.list('/posts', {
      query: {
        limitToLast: 20,
        orderByChild: 'published',
        equalTo: true,
      }      
    }).map(
      items => items.sort( function(a,b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        return 0;   
      })
    ) as FirebaseListObservable<Post[]>;
    return this.items$;
  }

  promote(id: string) {
    return this.items$.update(id,{
      published:true
    });
  }

  remove(id: string) {
    return this.items$.remove(id);
  }

  findByArticle(id): FirebaseListObservable<Post[]> {
    this.items$ = this.af.list('/posts', {
      query: {
        orderByChild: 'articleId',
        equalTo: id,
      }      
    }).map(
      items => items.sort( function(a,b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        return 0;   
      })
    ) as FirebaseListObservable<Post[]>;
    return this.items$;    
  }

  create(post: Post) {
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.priority = 0 - Date.now();    
    return this.items$.push(post);
  }

}
