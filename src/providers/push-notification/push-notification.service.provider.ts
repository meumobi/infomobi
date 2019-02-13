import { PushNativeService, PushPwaService } from '@providers/push-notification';
import { Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class PushNotificationService {

  abstract init(env: EnvOneSignal): void;
  abstract signInUser(authData): void;
  abstract signOutUser(): Promise<void>;
  abstract register(): void;
}

const pushNotificationFactory = (platform: Platform, oneSignal: OneSignal) => {
  if (!platform.is('cordova')) {
    return new PushPwaService();
  } else {
    return new PushNativeService(oneSignal);
  }
};

export let PushNotificationServiceProvider = {
  provide: PushNotificationService,
  useFactory: pushNotificationFactory,
  deps: [Platform, OneSignal]
};

export interface EnvOneSignal {
  appId: string;
  googleProjectNumber: string;
}
