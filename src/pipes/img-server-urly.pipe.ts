import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@env';

/** 
 * img.src | imgServerUrl:'meumobi':1024
 * Should convert '/uploads/items/6981759.png' on
 * http://vps548719.ovh.net/meumobi/uploads/items/6981759.png?width=1024
*/

@Pipe({
  name: 'imgServerUrly'
})
export class ImgServerUrlyPipe implements PipeTransform {
  
  transform(src: string, width = 1024) {
    return ENV.imgServer.url + src + "?width=" + width
  }
}