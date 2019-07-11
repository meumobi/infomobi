import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@env';
import Utils from '@shared/utils';

/**
 * img.src | imgServerSrcsettify
 * Should convert '/uploads/items/6981759.png' on
 *
 *  http://vps548719.ovh.net/meumobi//items/6981759.png?width=2048 2048w,
    http://vps548719.ovh.net/meumobi//items/6981759.png?width=1024 1024w,
    http://vps548719.ovh.net/meumobi//items/6981759.png?width=800 800w

 * Should convert 'https://infomobi.page.link/HgkE' on
 *
 *  http://vps548719.ovh.net/firebase/HgkE?width=2048 2048w,
    http://vps548719.ovh.net/firebase/HgkE?width=1024 1024w,
    http://vps548719.ovh.net/firebase/HgkE?width=800 800w
*/

@Pipe({
  name: 'imgServerSrcsettify'
})
export class ImgServerSrcsettifyPipe implements PipeTransform {
  sizes = [2048, 1024, 600];

  transform(src: string) {
    const prefix = Utils.imgServerPrefix(src);
    return this.sizes.map((width) => {
      return `${prefix}?width=${width}&scale=both&format=jpg ${width}w`;
    }).toString();
  }
}
