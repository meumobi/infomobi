import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Auth } from '@models/auth.interface';

@Injectable()
export class AuthDataPersistenceService {
  
  authData = {  
    "success":true,
    "token":"14cff39e74468e78494ab0778776d12f3aedca53",
    "visitor":{  
      "first_name":"Victor",
      "last_name":"Dias",
      "email":"victor.dias+employee@meumobi.com",
      "site":"meumobibox.meumobi.com"
    }
  }
  
  isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor() {
    console.log('Hello AuthDataPersistence Mock');
  }

  /**
  * if we have token the user is loggedIn
  * @returns {boolean}
  */
  private hasToken() : boolean {
    console.log('authData: ' + !!this.authData );
    console.log(this.authData);
    return !!this.authData;
  }
  
  get(): Auth {
    return this.authData;
  }
  
  set(auth): void {
    
  }
  
  clear(): void {
    
  }
}