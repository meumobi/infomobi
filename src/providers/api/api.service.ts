import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Auth, AuthError } from '@models/auth.interface';
import { ENV } from '@env';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  fetchLatestItems(): Promise<any[]> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': '94086d89cce67659fe83eb72a548cd5707e6a800'
      }
    };
    
    const url = ENV.meumobi.apiUrl + "/api/katrium.meumobi.com/items/latest";
    
    return this.http.get(url, httpOptions).toPromise()
    .then(
      (res: any) => {
        return res.items;
      }
    );
  }

  fetchItemsByCategory(id: number): Promise<any[]> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': '94086d89cce67659fe83eb72a548cd5707e6a800'
      }
    };
    
    const url = ENV.meumobi.apiUrl + `/api/katrium.meumobi.com/categories/${id}/items`;
    
    return this.http.get(url, httpOptions).toPromise()
    .then(
      (res: any) => {
        return res.items;
      }
    );
  }

  vote(poll): Promise<any> {
    return Promise.resolve(poll);
  }


  fetchItemById(id: string): Promise<any> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': '94086d89cce67659fe83eb72a548cd5707e6a800'
      }
    };
    
    const url = ENV.meumobi.apiUrl + `/api/katrium.meumobi.com/items/${id}`;
    
    return this.http.get(url, httpOptions).toPromise();
  }


  login(email: string, password: string): Promise<Auth | AuthError> {
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

    return this.http
      .post<Auth>(url, data, httpOptions)
      .toPromise()
      .then((response) => {
        return response
        // return response.json().data as Hero[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<AuthError> {
    let errorMessage: string;
    if(error.error instanceof Error){      
      errorMessage = `A network or client-side error occured: ${error.error.message}`;
    } else {        
        errorMessage = `API server returned error code ${error.status}, body of error was: ${error.error}`;
    }
    console.log(errorMessage);

    let authServiceError:AuthError = new AuthError();
    console.error('An error occurred', error);
    authServiceError.message = error.error.error;

    return Promise.reject(authServiceError);
  }
}
