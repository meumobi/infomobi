import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@models/auth.interface';
import { HttpHeaders } from '@angular/common/http';
import { ENV } from '@env';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(email: string, password: string): Promise<any> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        //'withCredentials': 'true'
      }
    };

    const url = ENV.meumobi.apiUrl + "/api/visitors/login";

    const data = {
      email: email,
      password: password
    };

    return this.http.post(url, data, httpOptions).toPromise();
  }

}
