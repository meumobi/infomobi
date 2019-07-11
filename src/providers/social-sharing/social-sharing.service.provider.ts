import { SocialSharingNativeService, SocialSharingPwaService } from '@providers/social-sharing';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GetLargerThumbnailUrlPipe } from '@pipes/get-larger-thumbnail-url.pipe';


@Injectable()
export abstract class SocialSharingService {

  abstract shareItem(item): Promise<any>;
  abstract shareMedia(media): Promise<any>;
}

const SocialSharingFactory = (
    platform: Platform,
    socialSharing: SocialSharing,
    getLargerThumbnailUrlPipe: GetLargerThumbnailUrlPipe
  ) => {
  if (!platform.is('cordova')) {
    return new SocialSharingPwaService();
  } else {
    return new SocialSharingNativeService(socialSharing, getLargerThumbnailUrlPipe);
  }
};

export let SocialSharingServiceProvider = {
  provide: SocialSharingService,
  useFactory: SocialSharingFactory,
  deps: [Platform, SocialSharing]
};


