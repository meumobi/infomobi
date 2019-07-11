import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Auth, AuthError } from '@models/auth.interface';
import { ENV } from '@env';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';

@Injectable()
export class ApiService {

  private token: string;
  private domain: string;
  private authData$: Observable<Auth>;

  constructor(
    public http: HttpClient,
    public authDataPersistenceService: AuthDataPersistenceService
  ) {
    this.authData$ = authDataPersistenceService.getAuthDataObserver();

    this.reset();

    this.authData$.subscribe( authData => {
      console.log('AuthData updated', authData);
      if (authData) {
        try {
          this.domain = authData.visitor.site;
          this.token = authData.token;
        } catch (err) {
          this.reset();
          console.error(err);
  /**
   * TODO: use error native method of Observable
   */
        }
      } else {
        this.reset();
      }
    });
  }

  private reset() {
    this.domain = null;
    this.token = null;
  }

  private buildUrl(endp) {
    try {
      /*
        If this.domain is null then use domain empty
      */
     console.log('ApiService: buildUrl');
      const domain = (this.domain) ? this.domain : '';
      const url = `${ENV.meumobi.apiUrl}/api/${domain}${endp}/`;

      return url;
    } catch (err) {
    }
  }

  private sendRequest(url, options) {

    return this.http.get(url, options).toPromise()
    .then(
      (res: any) => {
        return res.items;
      }
    );
  }

  fetchLatestItems(): Promise<any[]> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/items/latest');

    return this.sendRequest(url, httpOptions);
  }

  performance(): Promise<any> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/performance');

    return this.http.get(url, httpOptions).toPromise()
  }

  fetchItemsByCategory(id: number): Promise<any[]> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/categories') + `${id}/items`;

    return this.sendRequest(url, httpOptions);
  }

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
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/items') + `${id}`;

    return this.http.get(url, httpOptions).toPromise();
  }

  forgotPassword(email: string): Promise<any> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
      }
    };

    const url = this.buildUrl('/visitors/forgot_password');

    const data = {
      email: email
    };

    return this.http
      .post<any>(url, data, httpOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }


  login(email: string, password: string): Promise<Auth | AuthError> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
      }
    };

    const url = this.buildUrl('/visitors/login');

    const data = {
      email: email,
      password: password
    };

    return this.http
      .post<Auth>(url, data, httpOptions)
      .toPromise()
      .then((response) => {
        return response;
        // return response.json().data as Hero[];
      })
      .catch(this.handleError);
  }


  updateVisitorPassword(email: string, current_password: string, password: string): Promise<Auth | AuthError> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': this.token
      }
    };
    const url = this.buildUrl('/visitors');

    const data = {
      email: email,
      current_password: current_password,
      password: password
    };

    return this.http
      .put<any>(url, data, httpOptions)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<AuthError> {
    let errorMessage: string;
    if (error.error instanceof Error) {
      errorMessage = `A network or client-side error occured: ${error.error.message}`;
    } else {
        errorMessage = `API server returned error code ${error.status}, body of error was: ${error.error}`;
    }
    console.log(errorMessage);

    const authServiceError: AuthError = new AuthError();
    console.error('An error occurred', error);
    authServiceError.message = error.error.error;

    return Promise.reject(authServiceError);
  }
}
