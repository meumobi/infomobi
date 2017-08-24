import { Injectable } from '@angular/core';
import videos from './mock-videos';

import Utils from '../../shared/utils';

@Injectable()
export class VideosProvider {

  findAll() {
    return Promise.resolve(videos);
  }

  findById(id) {
    let data = Utils.lookup(videos);
    return Promise.resolve(data[id]);
  }

}
