import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal, OSPermissionSubscriptionState } from '@ionic-native/onesignal';

@Injectable()
export class PushNotificationService {

  private googleProjectNumber: string;
  private appId: string;

  constructor(
    public http: HttpClient,
    public oneSignal: OneSignal
  ) {
    console.log('Hello PushNotificationService Provider');
  }

  register(appId, googleProjectNumber): void {
    this.oneSignal.startInit(appId, googleProjectNumber);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

   // Retrieve the OneSignal user id and the device token
   this.oneSignal.getIds()
   .then((ids) => {
     /**
      * Return userId and pushToken
      */
      console.log('getIds: ' + JSON.stringify(ids));
   });

    this.oneSignal.handleNotificationReceived().subscribe((OSNotification) => {
      console.log('Notification received', OSNotification);
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((OSNotificationOpenedResult) => {
      // do something when a notification is opened
      console.log('Notification opened', OSNotificationOpenedResult.notification);
    });
    this.oneSignal.endInit();
  }

  setSubscription(enable: boolean): void {
    this.oneSignal.setSubscription(enable);
  }

  getPermissionSubscriptionState(): Promise<OSPermissionSubscriptionState> {

    /**
     * .then(State => {console.log(State.subscriptionStatus)})
     */

    return this.oneSignal.getPermissionSubscriptionState();
  }

  signInUser(authData): void {
    this.oneSignal.sendTag('domain', authData.visitor.site);
    this.oneSignal.setEmail(authData.visitor.email);
  }

  signOutUser(): Promise<void> {
    return this.oneSignal.logoutEmail().then(() => {
      this.oneSignal.deleteTag('domain');
    });
  }
}
