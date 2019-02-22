import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';
import { SocialSharingService } from '@providers/social-sharing';

@Injectable()
export class SocialSharingPwaService implements SocialSharingService {
  constructor(
    private meutToastService: MeuToastService,
    private translateService: TranslateService,
  ) {
    console.log('Hello SocialSharingService Provider');
  }

  private copyToClipBoard(text) {
    Utils.copyToClipBoard(text);
    this.meutToastService.present(this.translateService.instant('CLIPBOARD_COPY.LINK'));
  }

  shareItem(item) {
    const params = {
      text: Utils.striptags(Utils.br2nl(item.description)),
      title: Utils.striptags(Utils.br2nl(item.title)),
      url: item.hasOwnProperty('link') ? item.link : null
    };
    try {
      navigator['share'](params);
    } catch (err) {
      this.copyToClipBoard(params.url);
    }
  }

  shareMedia(media) {
    const params = {
      text: Utils.striptags(Utils.br2nl(media.title)),
      title: Utils.striptags(Utils.br2nl(media.title)),
      url: media.url
    };
    try {
      navigator['share'](params);
    } catch (err) {
      this.copyToClipBoard(params.url);
    }
  }

}
