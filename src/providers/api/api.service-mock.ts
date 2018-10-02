import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { last } from 'rxjs/operators';
import authData from '@providers/auth/mock-auth';
import items from '@providers/items/mock-items';
import Utils from '@shared/utils';

import { Auth, AuthError } from '@models/auth.interface';
import { ENV } from '@env';

@Injectable()
export class ApiService {

  private token: string = null;
  private domain: string = null;
  private authData$: Observable<Auth>;
  
  constructor(
    public http: HttpClient,
  ) {
    this.authData$ = Observable.of(authData).pipe(last()).delay(2000);

    this.authData$.subscribe( authData => {
      try {
        console.log("ApiService: set authData");
        this.domain = authData.visitor.site;
        this.token = authData.token;
      } catch (err) {
/**
 * TODO: use error native method of Observable
 */
      }
    })
  }

  private buildUrl(endp) {
    try {
      /*
        If this.domain is null then use domain empty
      */
     console.log("ApiService: buildUrl");
      const domain = (this.domain) ? this.domain : '';
      const url = `${ENV.meumobi.apiUrl}/api/${domain}${endp}/`;

      return url;
    } catch (err) {
    }
  }

  fetchLatestItems(): Promise<any[]> {
    
    return Promise.resolve(items.items);
  }

  fetchItemsByCategory(id: number): Promise<any[]> {
    const data = items.items.filter(
      item => item.parent_id == id
    )

    return Promise.resolve(data);
  }

  /**
   * Need a refactor of poll to use a Service and mockups in order to allow Unit tests
   * @param poll 
   */
  vote(poll): Promise<any> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/items') + `${poll.id}/poll`;
    
    return this.http.post(url, poll.params, httpOptions).toPromise();    
  }

  fetchItemById(id: string): Promise<any> {
    let data = Utils.lookup(items.items);

    return Promise.resolve(data[id]);
  }

  login(email: string, password: string): Promise<Auth | AuthError> {
    return this.authData$.toPromise()
    .then((response: Auth) => {
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