import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return Promise.resolve();
  }

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return Promise.resolve();
  }

  resetPassword(email: string): firebase.Promise<any> {
    return Promise.resolve();
  }

  logoutUser(): firebase.Promise<any> {
    return Promise.resolve();
  }

}