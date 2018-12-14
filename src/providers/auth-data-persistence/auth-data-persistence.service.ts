import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Auth } from '@models/auth.interface';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

const TOKEN_KEY = "X-Auth-Token";

@Injectable()
export class AuthDataPersistenceService {

  private authData$: BehaviorSubject<Auth|null> = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private platform: Platform,
  ) {
    this.platform.ready().then( _ => {
      this.checkToken();
    })
  }

  public checkToken(): Promise<Auth|null> {

    return this.storage.get(TOKEN_KEY).then( data => {
      this.authData$.next(JSON.parse(data));
      return data;
    })
  }
  
  public set(data): Promise<Auth> {

    return this.storage.set(TOKEN_KEY, JSON.stringify(data))
    .then( 
      () =>{
        this.authData$.next(data);

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
    return !!this.authData$.value;
  }
}
