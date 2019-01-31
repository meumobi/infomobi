import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, AuthError } from '@models/auth.interface';
import { ApiService } from '@providers/api';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';

@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient,
    public apiService: ApiService,
    public authDataPersistenceService: AuthDataPersistenceService
  ) {
    console.log('Hello AuthProvider Provider');
  }

  signIn(email: string, password: string): Promise<Auth|AuthError> {
    return this.apiService.login(email, password)
    .then((response: Auth) => {
      console.log('AuthService, signIn succeed');
      if (response.error === 'password expired') {
        this.authDataPersistenceService.set(response);
        return Promise.reject({message: 'passwordExpired'});
      } else {
        return this.authDataPersistenceService.save(response);
      }
    });
  }

  signOut(): Promise<void> {
    return this.authDataPersistenceService.clear();
  }

  updatePassword(email, currentPassword, password): Promise<Auth> {

    return this.apiService.updateVisitorPassword(email, currentPassword, password).then(
      (authData) => {
        return this.authDataPersistenceService.save(authData);
      }
    );
  }

  forgotPassword(email: string): Promise<void> {
    return this.apiService.forgotPassword(email);
  }
}
