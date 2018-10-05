import { Component, Input } from '@angular/core';
@Component({
  selector: 'img-avatar',
  templateUrl: 'img-avatar.html'
})
export class ImgAvatarComponent {
  @Input() src: any;

  constructor() {
    console.log('Hello ImgAvatarComponent Component');
  }

  ngOnInit() {
    console.log(this.src);
  }

}
