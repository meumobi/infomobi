import { Component, Input } from '@angular/core';
import Utils from '@shared/utils';

@Component({
  selector: 'img-thumbnail',
  templateUrl: 'img-thumbnail.html'
})
export class ImgThumbnailComponent {
  @Input() src: any;
  srcRetail: any;
  sufix: string = "width=200&height=200&mode=crop&scale=both&format=jpg";

  constructor() {
    console.log('Hello ImgThumbnailComponent Component');
  }

  transform() {
    const prefix = Utils.imgServerPrefix(this.src);
    this.srcRetail = `${prefix}?${this.sufix}`;
  }

  ngOnInit() {
    this.transform();
  }

}
