import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from "rxjs";
import { Auth } from '@models/auth.interface';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthDataPersistenceService {

  private authData$ = new ReplaySubject<Auth|null>(1);

  constructor(
    private storage: Storage
  ) {
    this.storage.get("authData")
    .then(
      data => {
        this.authData$.next(JSON.parse(data));
      });
  }
  
  public set(data): Promise<void> {
    console.log('set authData on ionicStorage');

    return this.storage.set('authData', JSON.stringify(data))
    .then( 
      () =>{
        this.authData$.next(data);
      });
  }

  public getAuthDataObserver(): Observable<Auth|null> {

    return this.authData$.asObservable().share();
  }
  
  public clear(): Promise<void> {
    console.log("clear authData on ionicStorage");
    return this.storage.remove('authData')
    .then( () => {
      this.authData$.next(null);
    });
  }
}