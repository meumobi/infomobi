import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import Utils from '@shared/utils';

@Injectable()
export class SocialSharingService {

  constructor(
    public http: HttpClient,
    private socialSharing: SocialSharing
  ) {
    console.log('Hello SocialSharingService Provider');
  }

  shareItem(item) {
    const params = {
      message: Utils.striptags(Utils.br2nl(item.description)),
      subject: Utils.striptags(Utils.br2nl(item.title)),
      files: [],
      url: item.hasOwnProperty('link') ? item.link : null
    };
    if (item.thumbnails && item.thumbnails.length > 0) {
      params.files.push(item.thumbnails[0].url);
    }
    return this.socialSharing.shareWithOptions(params);
  }

}
