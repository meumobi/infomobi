import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { UserProfile } from '@models/contact-profile';
import { AuthUser } from '@models/auth.interface';

@Injectable()
export class UserProfileService {

  public current$ = new Subject<UserProfile>();

  constructor(public http: HttpClient) {
    console.log('Hello UserProfileProvider Provider');
  }

  public create(user: AuthUser) {
    return Promise.resolve();
  }
  public update(user: AuthUser) {

    return Promise.resolve();
  }
  
  public fetchByEmail(email: string) {
    return Promise.resolve();
  }

}
