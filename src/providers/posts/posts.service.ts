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

  constructor(af: AngularFireDatabase) {
    this.items$ = af.list('/posts', {
      query: {
        //orderByKey: true,
        limitToLast: 20,
        orderByChild: 'createdAt',
      }      
    });
  }

  findAll(): FirebaseListObservable<Post[]> {
    return this.items$;
  }

  create(post: Post) {
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.priority = 0 - Date.now();

    return this.items$.push(post);
  }

}
