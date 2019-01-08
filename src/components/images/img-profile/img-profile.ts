import { Component, Input } from '@angular/core';
import Utils from '@shared/utils';

@Component({
  selector: 'img-profile',
  templateUrl: 'img-profile.html'
})
export class ImgProfileComponent {
  @Input() src: any;
  srcRetail: string;
  srcSet: string;
  config = {
    src: {
      width: 400,
      height: 400
    },
    srcSet: [
      {
        width: 400,
        height: 400,
        screen: 800
      },
      {
        width: 600,
        height: 600,
        screen: 1024
      },
      {
        width: 800,
        height: 800,
        screen: 2048
      },
    ]
  }


  constructor() {
    console.log('Hello ImgProfileComponent Component');
  }

  transform() {
    const prefix = Utils.imgServerPrefix(this.src);
    const size = this.config.src;
    this.srcRetail = `${prefix}?width=${size.width}&height=${size.height}&mode=crop&scale=both&format=jpg`;
    this.srcSet = this.config.srcSet.map((size) => {
      return `${prefix}?width=${size.width}&height=${size.height}&mode=crop&scale=both&format=jpg ${size.screen}w`;
    }).toString();
  }

  ngOnInit() {
    this.transform();
  }

}
