import { AuthUser } from './../../models/auth.interface';
import { Injectable } from '@angular/core';
import { OneSignal, OSPermissionSubscriptionState } from '@ionic-native/onesignal';
import { PushNotificationService, EnvOneSignal } from '@providers/push-notification';

@Injectable()
export class PushNativeService implements PushNotificationService {

  constructor(
    public oneSignal: OneSignal,
  ) {
    console.log('Hello PushNativeService Provider');
  }

  init(env: EnvOneSignal): void {
    this.oneSignal.startInit(env.appId, env.googleProjectNumber);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    // Set your iOS Settings
    const iosSettings = {
      kOSSettingsKeyAutoPrompt: true,
      kOSSettingsKeyInAppLaunchURL: false
    };

    this.oneSignal.iOSSettings(iosSettings);

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

  /**
   * promptForPushNotificationsWithUserResponse
   *  - Only iOS
   *  - Only works if you set kOSSettingsKeyAutoPrompt to false.
   *  https://documentation.onesignal.com/docs/cordova-sdk#section--promptforpushnotificationswithuserresponse-
   */
  register() {
    this.oneSignal.promptForPushNotificationsWithUserResponse().then(
      (response: boolean) => {
        console.log(response);
      },
      (reason: any) => {
        console.log(reason);
      }
    );
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
