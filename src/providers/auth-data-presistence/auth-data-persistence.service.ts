import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Auth } from '@models/auth.interface';

@Injectable()
export class AuthDataPersistenceService {

  constructor() {
    console.log('Hello AuthDataPersistenceService');
  }  
  
  isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());
  
  /**
  * if we have token the user is loggedIn
  * @returns {boolean}
  */
  private hasToken(): boolean {
    return !!localStorage.getItem('authData');
  }
  
  get(): Auth {
    return JSON.parse(localStorage.getItem('authData'));
  }
  
  set(auth): void {
    console.log('set authData on localStorage');
    localStorage.setItem('authData', JSON.stringify(auth));
    this.isLoggedSubject.next(true);
  }
  
  clear(): void {
    localStorage.removeItem('authData');
    this.isLoggedSubject.next(false);
  }
}