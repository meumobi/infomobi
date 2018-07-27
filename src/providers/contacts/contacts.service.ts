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
  
  search(): Observable<ContactProfile[]> {
    this.itemsCollection = this.af.collection<ContactProfile>('contacts',
    ref => {
      let query : firebase.firestore.Query = ref;
      query = query.where('isPublished', '==', 'true');
      query = query.orderBy('displayName', 'asc');
      return query;
    }
  );   
  this.items = this.itemsCollection.snapshotChanges().map(actions => {
    return actions.map(a => {       
      const data = a.payload.doc.data() as ContactProfile;
      const id = a.payload.doc.id;
      return { id, ...data};
    });
  });    
  return this.items;
}

update(id: string, changes: any) {
  return this.itemsCollection.doc(id).update(changes);
}

save(contact: ContactProfile) {
  const data = JSON.parse(JSON.stringify(contact));
  console.log(data);
  return this.itemsCollection.add(data);
}

}