import { Injectable } from '@angular/core';
import { PushNotificationService, EnvOneSignal } from '@providers/push-notification';

declare var OneSignal: any;

@Injectable()
export class PushPwaService implements PushNotificationService {

  init(env: EnvOneSignal): void {
    const appId = env.appId;

    OneSignal.push(function() {
      console.log('Init PWA push');
      OneSignal.init({
        appId: appId,
        autoRegister: false,
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: false,
        }
      });
    });

    OneSignal.push(function() {
      OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {
        if (isEnabled) {
          console.log('Push notifications are enabled!');
        } else {
          console.log('Push notifications are not enabled yet.');
        }
      });
    });

    OneSignal.push(function() {
      OneSignal.getNotificationPermission().then(function(permission) {
        console.log('Site Notification Permission:', permission);
      });
    });

    OneSignal.push(function() {
      OneSignal.getUserId().then(function(userId) {
        console.log('OneSignal User ID:', userId);
      });
    });
  }

  register(): void {
    OneSignal.push(function() {
      OneSignal.registerForPushNotifications();
    });
  }

  signInUser(authData): void {
    OneSignal.push(function() {
      OneSignal.setEmail(authData.visitor.email);
    });

    OneSignal.push(function() {
      OneSignal.sendTag('domain', authData.visitor.site);
    });
  }

  signOutUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.push(function() {
          OneSignal.logoutEmail();
        });
        OneSignal.push(function() {
          OneSignal.deleteTag('domain');
        });
        resolve();
      } catch {
        reject();
      }
    });
  }
}
