import { Injectable, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { Auth } from '@models/auth.interface';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthDataPersistenceService {
  isLoggedSubject = new Subject<boolean>();

  constructor(
    private storage: Storage
  ) {
    this.hasToken()
    .then(data => this.isLoggedSubject.next(data));
  }
  
  /**
  * if we have token the user is loggedIn
  * @returns {boolean}
  */
  private hasToken(): Promise<boolean> {
    console.log('toke');
    return this.storage.get("authData")
    .then(
      data => !!JSON.parse(data)
    )
  }
  
  get(): Promise<Auth> {
    console.log("get");
    return this.storage.get("authData")
    .then(data => JSON.parse(data))
  }
  
  set(auth): void {
    console.log('set authData on localStorage');
    this.storage.set('authData', JSON.stringify(auth))
    .then(data => this.isLoggedSubject.next(true));
  }
  
  clear(): void {
    console.log("clear");
    this.storage.remove('authData')
    .then(data => this.isLoggedSubject.next(false));
  }
}