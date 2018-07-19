import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  constructor() {
    console.log('Hello AuthProvider Provider');
  }  

  signIn(email: string, password: string): Promise<any> {
    return Promise.resolve();
  }

  signOut() {}

  isAuthenticated() {}
  
}