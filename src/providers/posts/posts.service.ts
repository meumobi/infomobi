import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';


import { Post } from './../../models/post.interface';

@Injectable()
export class PostsProvider {
  
 private itemsCollection: AngularFirestoreCollection<Post>;
  items: Observable<Post[]>;
  
  constructor(private af: AngularFirestore) {

  }

  findAll(): Observable<Post[]> {
    this.itemsCollection = this.af.collection<Post>('posts',
      ref => ref.where('published', '==', true).orderBy('priority')
    );
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  promote(id: string) {
    return this.itemsCollection.doc(id).update({
      published:true
    });
  }

  remove(id) {
    return this.itemsCollection.doc(id).delete();
  }

  findByArticle(id): Observable<Post[]> {
    this.itemsCollection = this.af.collection<Post>('posts', 
      ref => ref.where('articleId', '==', id)
    );
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.items; 

  }

  create(post: Post) {
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.priority = 0 - Date.now();  
    console.log("aaa"); 
    console.log(post); 
    return this.itemsCollection.add(post);
  }

}
