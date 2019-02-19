import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from '@models/contact-profile';
import userProfile from './mock-user-profile';
import { AuthUser } from '@models/auth.interface';

@Injectable()
export class UserProfileService {

  public current$ = new BehaviorSubject<UserProfile>(new UserProfile());

  constructor() {
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

  public hasRole(role: string): boolean {
    return this.current$.value.role === role;
  }

  public isAdmin(): boolean {
    return this.current$.value.role ? this.current$.value.role === 'admin' : false;
  }
}
