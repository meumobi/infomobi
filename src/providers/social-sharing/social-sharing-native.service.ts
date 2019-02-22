import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import Utils from '@shared/utils';
import { SocialSharingService } from '@providers/social-sharing';

@Injectable()
export class SocialSharingNativeService implements SocialSharingService {

  constructor(
    public socialSharing: SocialSharing
  ) {
    console.log('Hello SocialSharingNativeService Provider');
  }

  shareItem(item) {
    const params = {
      text: item.hasOwnProperty('description') ? Utils.striptags(Utils.br2nl(item.description)) : null,
      title: item.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(item.title)) : null,
      files: [],
      url: item.hasOwnProperty('link') ? item.link : null
    };
    if (item.thumbnails && item.thumbnails.length > 0) {
      params.files.push(item.thumbnails[0].url);
    }
    return this.socialSharing.shareWithOptions(params);
  }

  shareMedia(media) {
    console.log(media);
    const params = {
      text: media.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(media.title)) : null,
      title: media.hasOwnProperty('title') ? Utils.striptags(Utils.br2nl(media.title)) : null,
      files: [],
      url: media.url
    };
    if (media.hasOwnProperty('fullPath') && media.status === 'downloaded') {
      params.files.push(media.fullPath);
      params.url = null;
    } else if (media.thumbnails && media.thumbnails.length > 0) {
      params.files.push(media.thumbnails[0].url);
    }
    return this.socialSharing.shareWithOptions(params);
  }

}
