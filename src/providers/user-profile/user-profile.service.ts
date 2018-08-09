import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from "rxjs";
import * as firebase from 'firebase';

import { UserProfile } from '@models/contact-profile';
import { AuthUser } from '@models/auth.interface';

@Injectable()
export class UserProfileService {
  
  private itemsCollection: AngularFirestoreCollection<UserProfile>;
  public current$ = new BehaviorSubject<UserProfile>(new UserProfile());
  
  constructor(private af: AngularFirestore) {}  
  
  public create(user: AuthUser): Promise<void> {
    const profile = new UserProfile();
    profile.domain = user.site;
    profile.firstName = user.first_name;
    profile.lastName = user.last_name;
    profile.email = user.email;
    profile.displayName = `${user.first_name} ${user.last_name}`; 
    const id = this.af.createId();
    profile._id = id;
    const data = JSON.parse(JSON.stringify(profile));
    return this.itemsCollection.doc(id).set(data);
  }

  public update(profile: UserProfile) {   
    const data = JSON.parse(JSON.stringify(profile));
    return this.itemsCollection.doc(profile._id).set(data);
  }
  
  public fetchByEmail(email: string) {
    this.itemsCollection = this.af.collection<UserProfile>('contacts',
      ref => {
        let query : firebase.firestore.Query = ref;
        query = query.where('email', '==', email);
        return query;
      }
    );  
    return this.itemsCollection.snapshotChanges()
    .map(
      actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data() as UserProfile;
            this.current$.next(data);
            return data;
          }
        )       
      }      
    ).map(data => data[0]) 
  }
}
