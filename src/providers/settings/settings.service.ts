import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Auth } from '@models/auth.interface';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Query } from '@firebase/firestore-types';
import { Settings } from '@models/settings';

@Injectable()
export class SettingsService {

  private settingsCollection: AngularFirestoreCollection<Settings>;
  private settings$ = new ReplaySubject<Settings>(1);
  private domain: string;

  constructor(
    private af: AngularFirestore,
    private authDataPersistenceService: AuthDataPersistenceService,
  ) {
    const authData$ = this.authDataPersistenceService.getAuthDataObserver();

    authData$.subscribe(auth => {
      try {
        this.domain = auth.visitor.site;
        this.settingsCollection = this.af.collection<Settings>('settings',
          ref => {
            let query: Query = ref;
            query = query.where('domain', '==', this.domain);
            return query;
          }
        );
        this.settingsCollection.valueChanges().subscribe(settings => {
          this.settings$.next(settings[0]);
        });
      } catch (err) {
        console.error(err);
      }
    });
  }

  private create(data: Settings): Promise<void> {
    // Persist a document id
    data._id = this.af.createId();
    const settings = JSON.parse(JSON.stringify(data));
    return this.settingsCollection.doc(settings._id).set(settings);
  }

  private update(data: Settings): Promise<void> {
    const settings = JSON.parse(JSON.stringify(data));
    return this.settingsCollection.doc(settings._id).update(settings);
  }

  set(data: Settings): Promise<void> {
    try {
      data.domain = this.domain;
      if (data._id) {
        return this.update(data);
      } else {
        return this.create(data);
      }
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }

  getSettingsObserver(): Observable<Settings> {
    return this.settings$.asObservable();
  }
}
