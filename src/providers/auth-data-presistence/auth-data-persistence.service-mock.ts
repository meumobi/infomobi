import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AuthDataPresistenceService {

  isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('authData');
  }

  get() {
    localStorage.getItem('authData');
  }

  set(auth) {
    localStorage.setItem('authData', auth);
  }

  clear() {
    localStorage.removeItem('authData');
  }
}