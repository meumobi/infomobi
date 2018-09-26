import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Query } from '@firebase/firestore-types';
import { ContactProfile } from '@models/contact-profile';

@Injectable()
export class ContactsService {
  private itemsCollection: AngularFirestoreCollection<ContactProfile>;
  items: Observable<ContactProfile[]>;
  
  constructor(private af: AngularFirestore) {
    this.itemsCollection = this.af.collection<ContactProfile>('contacts');
  }
  
  search(): Observable<ContactProfile[]> {
    this.itemsCollection = this.af.collection<ContactProfile>('contacts',
    ref => {
      let query : Query = ref;
      query = query.where('isPublished', '==', true);
      query = query.orderBy('displayName', 'asc');
      return query;
    });   
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      console.log(actions);
      return actions.map(a => {       
        const data = a.payload.doc.data() as ContactProfile;
        return data;
      });
    });    
    return this.items;
  }

  update(contact: ContactProfile) {
    const id = contact._id;
    contact.modified = Date.now();
    const data = JSON.parse(JSON.stringify(contact));
    console.log(contact);
    return this.itemsCollection.doc(id).update(data);
  }
  
  create(contact: ContactProfile): Promise<void> {
    const id = this.af.createId();
    contact._id = id;
    const data = JSON.parse(JSON.stringify(contact));
    return this.itemsCollection.doc(id).set(data);
  }
  
  findById(id): Observable<ContactProfile> {
    const itemDoc = this.af.doc<ContactProfile>(`contacts/${id}`);
    return itemDoc.valueChanges();
  }
}