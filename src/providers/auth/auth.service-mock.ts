import { Injectable } from '@angular/core';
import auth from './mock-auth';
import { Auth } from '@models/auth.interface';

@Injectable()
export class AuthService {
  
  constructor() {
    console.log('Hello AuthService Mock');
  }
  
  signIn(email: string, password: string): Promise<Auth> {
    
    /* Dummy authentication for testing, uses $timeout to simulate api call
    ----------------------------------------------*/
    
    return new Promise(resolve =>
      setTimeout(() => {
        let response = auth;
  
        if(!response.success) {
          response['message'] = 'Username or password is incorrect';
        }
  
        resolve(response);
      }, 1000)
    );    
  }
  
  resetPassword(email: string): Promise<any> {
    return Promise.resolve();
  }
  
  signOut(): Promise<any> {
    return Promise.resolve();
  }
  
  isAuthenticated(): Promise<any> {
    return Promise.resolve();
  }

}

//export { AuthProvider as AuthService };