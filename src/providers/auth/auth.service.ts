import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  signupUser(newEmail: string, newPassword: string): Promise<any> {
    return Promise.resolve();
  }

  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return Promise.resolve();
  }

  resetPassword(email: string): Promise<any> {
    return Promise.resolve();
  }

  logoutUser(): Promise<any> {
    return Promise.resolve();
  }

}
