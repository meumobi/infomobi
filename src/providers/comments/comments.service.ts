import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comment } from '@models/comment';
import { Query } from '@firebase/firestore-types';
import { ContactProfile } from '@models/contact-profile';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { switchMap } from 'rxjs/operators';
import Utils from '@shared/utils';

@Injectable()
export class CommentsProvider {
  
  private itemsCollection: AngularFirestoreCollection<Comment>;
  items: Observable<Comment[]>;

  constructor(private af: AngularFirestore) {}
  
  search(filters, lastItem = null): Observable<Comment[]> {
    this.itemsCollection = this.af.collection<Comment>('comments',
      ref => {
        let query : Query = ref;
        query = query.where('isPublished', '==', filters.isPublished);
        query = query.where('channel', '==', filters.channel);
        query = query.orderBy('published', 'desc');
        if (lastItem) {
          query = query.startAfter(lastItem.doc);
        }
        query = query.limit(20);
        return query;
      }
    );   
    const contacts = this.af.collection<ContactProfile>('contacts',
    ref => {
      let query : Query = ref;
      query = query.where('type', '==', 'user');
      return query;
    })
    .snapshotChanges().map(actions => {
      console.log(actions);
      return actions.map(a => {       
        const data = a.payload.doc.data() as ContactProfile;
        return data;
      })
    });    
    const comments = this.itemsCollection
    .snapshotChanges().map(actions => {
      return actions.map(a => {       
        console.log(a);
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        const doc = a.payload.doc;
        return { id, ...data, doc};
      });
    });    
    this.items = combineLatest(comments, contacts)
      .map(
        ([comments, contacts]) => {
          return comments.map(
            (comment) => {
              let data = Utils.lookup(contacts);
              comment.data["author"] = data[comment.data["authorRef"]];
              return comment;
            }
          )
        }
      )
    return this.items;
  }

  delete(id: string) {
    console.log(id);
    return this.itemsCollection.doc(id).delete();
  }  

  update(id: string, changes: any) {
    return this.itemsCollection.doc(id).update(changes);
  }

  promote(comment) {
    let newComment = new Comment("Message");
    newComment.data = comment.data;
    return this.save(newComment);
  }

  save(comment: Comment) {
    const data = JSON.parse(JSON.stringify(comment));
    console.log(data);
    return this.itemsCollection.add(data);
  }

}