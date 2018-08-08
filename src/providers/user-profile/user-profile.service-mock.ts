import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { UserProfile } from '@models/contact-profile'; 
import userProfile from './mock-user-profile';
import { AuthUser } from '@models/auth.interface';

@Injectable()
export class UserProfileService {

  public current$ = new BehaviorSubject<UserProfile>(new UserProfile());

  constructor() {
    console.log('Hello UserProfile Service');
  }

  public create(user: AuthUser) {
    this.current$.next(userProfile);
    return Promise.resolve(userProfile);
  }

  public update(user: UserProfile) {
    this.current$.next(userProfile);
    return Promise.resolve(userProfile);
  }
  
  public fetchByEmail(email: string) {
    this.current$.next(userProfile);
    return this.current$;
  }
}
