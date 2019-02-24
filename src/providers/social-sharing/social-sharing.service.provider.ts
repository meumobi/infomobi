import { SocialSharingNativeService, SocialSharingPwaService } from '@providers/social-sharing';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';


@Injectable()
export abstract class SocialSharingService {

  abstract shareItem(item): Promise<any>;
  abstract shareMedia(media): Promise<any>;
}

const SocialSharingFactory = (
    platform: Platform,
    socialSharing: SocialSharing,
  ) => {
  if (!platform.is('cordova')) {
    return new SocialSharingPwaService();
  } else {
    return new SocialSharingNativeService(socialSharing);
  }
};

export let SocialSharingServiceProvider = {
  provide: SocialSharingService,
  useFactory: SocialSharingFactory,
  deps: [Platform, SocialSharing]
};


