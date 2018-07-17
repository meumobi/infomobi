import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AuthDataPersistenceService {

  isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('authData');
  }

  get() {
    localStorage.getItem(JSON.parse('authData'));
  }

  set(auth) {
    console.log('set authData on localStorage');
    localStorage.setItem('authData', JSON.stringify(auth));
    this.isLoggedSubject.next(true);
  }

  clear() {
    localStorage.removeItem('authData');
    this.isLoggedSubject.next(false);
  }
}