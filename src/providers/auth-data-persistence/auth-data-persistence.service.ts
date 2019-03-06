import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, AuthUser } from '@models/auth.interface';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

const TOKEN_KEY = 'X-Auth-Token';

@Injectable()
export class AuthDataPersistenceService {

  private authData$: BehaviorSubject<Auth|null> = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
  ) {}

  public checkToken(): Promise<Auth|null> {

    return this.storage.get(TOKEN_KEY).then( data => {
      if (!data) {
        return this.checkV2AuthData();
      }

      this.authData$.next(JSON.parse(data));

      return data;
    });
  }

  public set(data): void {

    this.authData$.next(data);
    console.log('set authData persistence');
  }

  public save(data): Promise<Auth> {

    return this.storage.set(TOKEN_KEY, JSON.stringify(data))
    .then(
      () => {
        this.set(data);

        return data;
      });
  }

  public getAuthDataObserver(): Observable<Auth|null> {

    return this.authData$.asObservable();
  }

  public clear(): Promise<void> {

    return this.storage.remove(TOKEN_KEY)
    .then( () => {
      this.authData$.next(null);
    });
  }

  public isAuthenticated(): boolean {
    // return !!this.authData$.value && Object.prototype.hasOwnProperty.call(this.authData$.value, 'error');

    return !!this.authData$.value && !this.authData$.value.error;
  }

  private checkV2AuthData(): Promise<Auth> {
    const visitor = localStorage.getItem('visitor');
    const authToken = localStorage.getItem('authToken');
    let auth = null;
    if (visitor && authToken) {
      auth = this.migrateAuthData(JSON.parse(visitor), authToken);
      localStorage.removeItem('visitor');
      localStorage.removeItem('authToken');
    }

    return this.save(auth);
  }

  private migrateAuthData(visitor: AuthUser, authToken: string): Auth {
    const auth: Auth = {
      success: true,
      token: authToken,
      visitor: visitor
    };
    return auth;
  }
}
