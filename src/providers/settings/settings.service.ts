import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Query } from '@firebase/firestore-types';
import { Settings } from '@models/settings';

@Injectable()
export class SettingsService {

  private settingsCollection: AngularFirestoreCollection<Settings>;
  private settings$ = new BehaviorSubject<Settings>(new Settings()) ;

  constructor(
    private af: AngularFirestore,
  ) {}

  public loadByDomain(domain: string): void {
    this.fetchByDomain(domain).subscribe(
      data => {
        if (!data) {
          this.createByDomain(domain);
        } else {
          this.settings$.next(data);
        }
      }
    );
  }

  public setSettings(settings: Settings): Promise<void> {
    return this.update(settings);
  }

  public getSettings(): Observable<Settings>  {
    return this.settings$.asObservable();
  }

  private fetchByDomain(domain: string) {
    this.settingsCollection = this.af.collection<Settings>('settings',
      ref => {
        let query: Query = ref;
        query = query.where('domain', '==', domain);
        return query;
      }
    );
    return this.settingsCollection.snapshotChanges()
    .map(
      actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data() as Settings;
            return data;
          }
        );
      }
    ).map(data => data[0]);
  }

  private update(settings: Settings): Promise<void> {
    const id = settings._id;
    const data = JSON.parse(JSON.stringify(settings));
    return this.settingsCollection.doc(id).update(data);
  }

  private createByDomain(domain: string): Promise<void> {
    const settings = new Settings();
    const id = this.af.createId();
    settings.domain = domain;
    settings._id = id;
    const data = JSON.parse(JSON.stringify(settings));
    return this.settingsCollection.doc(id).set(data);
  }

}
