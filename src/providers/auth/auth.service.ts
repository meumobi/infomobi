import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, AuthError } from '@models/auth.interface';
import { ApiService } from '@providers/api';
import { AuthDataPersistenceService } from '@providers/auth-data-presistence';

@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient, 
    public apiService: ApiService,
    public authDataPresistenceService: AuthDataPersistenceService
  ) {
    console.log('Hello AuthProvider Provider');
  }

  signIn(email: string, password: string): Promise<Auth | AuthError> {
    return this.apiService.login(email, password)
    .then((response: Auth) => {
      console.log('AuthService, signIn succeed');

      this.authDataPresistenceService.set(response);
      return response;
    })
  }

  signOut(): void {
    this.authDataPresistenceService.clear();
  }
}
