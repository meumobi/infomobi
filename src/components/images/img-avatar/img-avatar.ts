import { Component, Input } from '@angular/core';
import Utils from '@shared/utils';

@Component({
  selector: 'img-avatar',
  templateUrl: 'img-avatar.html'
})
export class ImgAvatarComponent {
  @Input() src: any;
  sufix: string = "width=160&height=160&mode=crop";

  constructor() {
    console.log('Hello ImgAvatarComponent Component');
  }

  transform() {
    const prefix = Utils.imgServerPrefix(this.src);
    this.src = `${prefix}?${this.sufix}`;
  }

  ngOnInit() {
    this.transform();
  }

}
