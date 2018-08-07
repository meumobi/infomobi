import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Auth } from '@models/auth.interface';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthDataPersistenceService {

  private authData$ = new Subject<Auth>();

  constructor(
    private storage: Storage
  ) {
    this.storage.get("authData")
    .then(
      data => this.authData$.next(JSON.parse(data))
    )
  }
  
  public set(auth): Promise<void> {
    console.log('set authData on ionicStorage');
    
    return this.storage.set('authData', JSON.stringify(auth))
    .then( () => this.authData$.next(auth));
  }

  public get() : Observable<Auth> {
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