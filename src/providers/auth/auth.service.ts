import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@models/auth.interface';
import { ENV } from '@env';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(email: string, password: string): Promise<Auth> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
      }
    };

    const url = ENV.meumobi.apiUrl + "/api/visitors/login";

    const data = {
      email: email,
      password: password
    };

    console.log(data);

    return this.http.post<Auth>(url, data, httpOptions).toPromise();
  }

}
