import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  constructor() {
    console.log('Hello AuthService Mock');
  }  

  signIn(email: string, password: string): Promise<any> {
    return Promise.resolve();
  }

  signOut() {}

  isAuthenticated() {}
  
}