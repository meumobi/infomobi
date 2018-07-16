import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, AuthError } from '@models/auth.interface';
import { ApiProvider } from '@providers/api';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, public ApiService: ApiProvider) {
    console.log('Hello AuthProvider Provider');
  }

  signIn(email: string, password: string): Promise<Auth | AuthError> {

    return this.ApiService.login(email, password);
  }

  signOut() {}

  isAuthenticated() {}

}
