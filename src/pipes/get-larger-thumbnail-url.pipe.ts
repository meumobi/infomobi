import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLargerThumbnailUrl',
})
export class GetLargerThumbnailUrlPipe implements PipeTransform {
  /**
   * Takes an array of thumbs with width and height fields and return the larger.
   */
  transform(thumbnails: any) {
    if (thumbnails.length) {
      return this.getSortedThumbnails(thumbnails)[0].url;
    } else {
      return null;
    }
  }

  getSortedThumbnails(array) {
    return array.sort(
      function(a, b) {
        return b.width - a.width;
      }
    );
  }
}
