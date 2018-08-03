import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { UserProfile } from '@models/contact-profile'; 
import userProfile from './mock-user-profile';
import { AuthUser } from '@models/auth.interface';

@Injectable()
export class UserProfileService {

  public current$ = new BehaviorSubject<UserProfile>(new UserProfile());

  constructor(public http: HttpClient) {
    console.log('Hello UserProfile Service');
  }

  public create(user: AuthUser): Promise<void> {
    this.current$.next(userProfile);
    return Promise.resolve();
  }

  public update(auth: AuthUser, profile: UserProfile): Promise<void> {
    this.current$.next(userProfile);
    return Promise.resolve();
  }
  
  public fetchByEmail(email: string): Observable<any> {
    this.current$.next(userProfile);
    return this.current$;
  }

}
