import { SocialSharingNativeService, SocialSharingPwaService } from '@providers/social-sharing';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export abstract class SocialSharingService {

  abstract shareItem(item): void;
  abstract shareMedia(media): void;
}

const SocialSharingFactory = (
    platform: Platform,
    socialSharing: SocialSharing,
    meutToastService: MeuToastService,
    translateService: TranslateService,
  ) => {
  if (!platform.is('cordova')) {
    return new SocialSharingPwaService(meutToastService, translateService);
  } else {
    return new SocialSharingNativeService(socialSharing);
  }
};

export let SocialSharingServiceProvider = {
  provide: SocialSharingService,
  useFactory: SocialSharingFactory,
  deps: [Platform, SocialSharing, MeuToastService, TranslateService]
};


