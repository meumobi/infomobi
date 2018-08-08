import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { ContactProfile } from '@models/contact-profile';

@Injectable()
export class ContactsService {
  private itemsCollection: AngularFirestoreCollection<ContactProfile>;
  items: Observable<ContactProfile[]>;
  
  constructor(private af: AngularFirestore) {}
  
  search(term): Observable<ContactProfile[]> {
    this.itemsCollection = this.af.collection<ContactProfile>('contacts',
    ref => {
      let query : firebase.firestore.Query = ref;
      query = query.where('isPublished', '==', true);
      query = query.orderBy('displayName', 'asc');
      return query;
    });   
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      console.log(actions);
      return actions.map(a => {       
        const data = a.payload.doc.data() as ContactProfile;
        return data;
      }).filter(contact => contact.displayName.toLowerCase().indexOf(term.toLowerCase()) > -1);
    });    
    return this.items;
  }

  findById(id) {
    const itemDoc = this.af.doc<ContactProfile>(`contacts/${id}`);
    return itemDoc.valueChanges();
  }

}