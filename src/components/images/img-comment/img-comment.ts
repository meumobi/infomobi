import { Component, Input } from '@angular/core';
import Utils from '@shared/utils';

@Component({
  selector: 'img-comment',
  templateUrl: 'img-comment.html'
})
export class ImgCommentComponent {
  @Input() src: any;
  srcZoom: string;
  srcRetail: string;
  srcSet: string;
  sufixZoom: string = "width=1200";
  sufix: string = "width=600&height=400&mode=crop";
  sizes = [
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
  ];


  constructor() {
    console.log('Hello ImgCommentComponent Component');
  }

  transform() {
    const prefix = Utils.imgServerPrefix(this.src);
    this.srcRetail = `${prefix}?${this.sufix}`;
    this.srcZoom = `${prefix}?${this.sufixZoom}`;
    this.srcSet = this.sizes.map((size) => {
      return `${prefix}?width=${size.width}&height=${size.height}&mode=crop ${size.screen}w`
    }).toString();
  }

  ngOnInit() {
    this.transform();
  }

}
