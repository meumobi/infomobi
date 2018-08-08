import { Injectable } from '@angular/core';
import authData from './mock-auth';
import { Auth } from '@models/auth.interface';
import { AuthDataPersistenceService } from '@providers/auth-data-presistence';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  authData$: Observable<Auth> = Observable.of(authData).delay(2000);

  constructor(
    public authDataPresistenceService: AuthDataPersistenceService
  ) {
    console.log('Hello AuthService Mock');
  }
  
  signIn(email: string, password: string): Promise<Auth> {
    
    /* Dummy authentication for testing, uses $timeout to simulate api call
    ----------------------------------------------*/
    return this.authData$.toPromise()
    .then((response: Auth) => {
      console.log('AuthService, signIn succeed');

      this.authDataPresistenceService.set(response);
      return response;
    })  
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