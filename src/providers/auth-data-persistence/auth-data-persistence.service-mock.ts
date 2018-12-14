import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Auth } from '@models/auth.interface';
import authData from '@providers/auth/mock-auth.ts';

@Injectable()
export class AuthDataPersistenceService {
  
  private authData$ = new BehaviorSubject<Auth>(null);
  
  constructor() {
    this.authData$.next(authData);
  }
  
  public checkToken(): Promise<Auth|null> {
    return Promise.resolve()
    .then( () => {
      this.authData$.next(authData);
      return authData;
    });
  }
  
  public set(auth): Promise<Auth|null> {
    console.log('set authData on ionicStorage');
    return Promise.resolve().then( () => {
      this.authData$.next(auth);
      return authData;
    });
  }

  public get(): Observable<Auth> {
    return this.authData$.asObservable().share();
  }
  
  public clear(): Promise<void> {
    console.log("clear authData on ionicStorage");
    return Promise.resolve().then( () => this.authData$.next(null));
  }

  public getAuthDataObserver(): Observable<Auth|null> {

    return this.authData$.asObservable();
  }

  public isAuthenticated(): boolean {
    return !!this.authData$.value;
  }
}