import { Component, Input } from '@angular/core';
import Utils from '@shared/utils';

@Component({
  selector: 'img-content',
  templateUrl: 'img-content.html'
})
export class ImgContentComponent {
  @Input() src: any;
  srcRetail: string;
  srcSet: string;
  config = {
    src: {
      width: 600,
      height: 400,
      mode: "crop"
    },
    srcSet: [
      {
        width: 600,
        height: 400,
        screen: 800
      },
      {
        width: 900,
        height: 600,
        screen: 1024
      },
      {
        width: 1200,
        height: 800,
        screen: 2048
      },
    ]
  }


  constructor() {
    console.log('Hello ImgContentComponent Component');
  }

  transform() {
    const prefix = Utils.imgServerPrefix(this.src);
    const size = this.config.src;
    this.srcRetail = `${prefix}?width=${size.width}&height=${size.height}&mode=${size.mode}`
    this.srcSet = this.config.srcSet.map((size) => {
      return `${prefix}?width=${size.width}&height=${size.height}&mode=crop ${size.screen}w`
    }).toString();
  }

  ngOnInit() {
    this.transform();
  }

}
