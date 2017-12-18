import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { 
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable 
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
    });
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
    });
    return this.items$;    
  }

  create(post: Post) {
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.priority = 0 - Date.now();    
    return this.items$.push(post);
  }

}
