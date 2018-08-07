import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Auth } from '@models/auth.interface';
import authData from '@providers/auth/mock-auth.ts';

@Injectable()
export class AuthDataPersistenceService {
  
  private authData$ = new Subject<Auth>();
  
  constructor() {
    this.authData$.next(authData);
  }
  
  public set(auth): Promise<void> {
    console.log('set authData on ionicStorage');
    return Promise.resolve().then( () => this.authData$.next(auth));
  }

  public get(): Observable<Auth> {
    return this.authData$.asObservable().share();
  }
  
  public clear(): Promise<void> {
    console.log("clear authData on ionicStorage");
    return Promise.resolve().then( () => this.authData$.next(null));
  }
}