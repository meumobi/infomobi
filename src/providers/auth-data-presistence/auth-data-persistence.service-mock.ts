import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Auth } from '@models/auth.interface';
import authData from '@providers/auth/mock-auth.ts';

@Injectable()
export class AuthDataPersistenceService {
  
  isLoggedSubject = new Subject<boolean>();
  
  constructor() {
    this.hasToken()
    .then(data => this.isLoggedSubject.next(data));
  }

  /**
  * if we have token the user is loggedIn
  * @returns {boolean}
  */
 private hasToken(): Promise<boolean> {
    return Promise.resolve(authData).then(
      data => !!data
    );
  }
  
  public get(): Promise<Auth> {
    return Promise.resolve(authData);
  }
  
  public set(auth): void {
    console.log('set authData on ionicStorage');
  }
  
  public clear(): void {
    console.log("clear authData on ionicStorage");
  }
}