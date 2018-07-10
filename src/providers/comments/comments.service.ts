import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comment } from '@models/comment.interface';
import * as firebase from 'firebase';

@Injectable()
export class CommentsProvider {
  
  private itemsCollection: AngularFirestoreCollection<Comment>;
  items: Observable<Comment[]>;
  lastItem: any = null;

  constructor(private af: AngularFirestore) {}

  findAll(filters, loadMore = false): Observable<Comment[]> {
    this.itemsCollection = this.af.collection<Comment>('comments',
      ref => {
        let query : firebase.firestore.Query = ref;
        query = query.where('published', '==', filters.published);
        query = query.where('postId', '==', filters.postId);
        query = query.orderBy('priority');
        if (this.lastItem && loadMore) {
          query = query.startAfter(this.lastItem);
        }
        query = query.limit(10);
        return query;
      }
    );   
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {       
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        this.lastItem = a.payload.doc;
        return { id, ...data };
      });
    });    
    return this.items;
  }

  delete(id: string) {
    return this.itemsCollection.doc(id).delete();
  }  

  update(id: string, changes: any) {
    return this.itemsCollection.doc(id).update(changes);
  }

  save(comment: Comment) {
    comment.priority = 0 - Date.now();  
    console.log(comment); 
    return this.itemsCollection.add(comment);
  }

}
