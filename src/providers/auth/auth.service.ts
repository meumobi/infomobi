import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, AuthError } from '@models/auth.interface';
import { ApiService } from '@providers/api';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, public apiService: ApiService) {
    console.log('Hello AuthProvider Provider');
  }

  signIn(email: string, password: string): Promise<Auth | AuthError> {

    return this.apiService.login(email, password);
  }

  signOut() {}

  isAuthenticated() {}

}
