import { Injectable } from '@angular/core';
import Utils from '@shared/utils';
import { SocialSharingService } from '@providers/social-sharing';

@Injectable()
export class SocialSharingPwaService implements SocialSharingService {

  shareItem(item): Promise<any> {
    const params = {
      text: item.hasOwnProperty('description') ? Utils.striptags(Utils.br2nl(item.description)) : null,
      title: item.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(item.title)) : null,
      url: item.hasOwnProperty('link') ? item.link : null
    };
    try {
      return navigator['share'](params);
    } catch (err) {
      Utils.copyToClipBoard(params.url);
      return Promise.resolve({message: 'CLIPBOARD_COPY.LINK'});
    }
  }

  shareMedia(media): Promise<any> {
    const params = {
      text: media.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(media.title)) : null,
      title: media.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(media.title)) : null,
      url: media.url
    };
    try {
      return navigator['share'](params);
    } catch (err) {
      Utils.copyToClipBoard(params.url);
      return Promise.resolve({message: 'CLIPBOARD_COPY.LINK'});
    }
  }

}
