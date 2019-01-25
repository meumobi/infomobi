import { Pipe, PipeTransform } from '@angular/core';
import Utils from '@shared/utils';

/**
 * img.src | imgServerUrl:'meumobi':1024
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
  name: 'imgServerUrly'
})
export class ImgServerUrlyPipe implements PipeTransform {

  settings = {
    default: 'width=1024&height=1024&mode=crop&scale=both&format=jpg',
    avatar: 'width=160&height=160&mode=crop&scale=both'
  };

  transform(src: string, context = 'default') {
    const prefix = Utils.imgServerPrefix(src);
    console.log(prefix, context);

    return `${prefix}?${this.settings[context]}`;
  }
}
