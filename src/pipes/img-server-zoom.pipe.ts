import { Pipe, PipeTransform } from '@angular/core';
import Utils from '@shared/utils';

@Pipe({
  name: 'imgServerZoom'
})
export class ImgServerZoomPipe implements PipeTransform {
  
  transform(src: string, width = 1200) {
    const prefix = Utils.imgServerPrefix(src); 
    return `${prefix}?width=${width}&scale=both&format=jpg`;
  }
}