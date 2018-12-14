import { Injectable } from '@angular/core';
import authData from './mock-auth';
import { Auth, AuthError } from '@models/auth.interface';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  authData$: Observable<Auth> = Observable.of(authData).delay(8000);

  constructor(
    public authDataPersistenceService: AuthDataPersistenceService
  ) {
    console.log('Hello AuthService Mock');
  }
  
  signIn(email: string, password: string): Promise<Auth|AuthError> {
    
    return new Promise((resolve, reject) => {
      resolve(authData);
    })
  }
  
  signOut(): Promise<void> {

    return this.authDataPersistenceService.clear();
  }
}
