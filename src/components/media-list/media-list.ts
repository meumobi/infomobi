import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-list',
  templateUrl: 'media-list.html'
})
export class MediaListComponent {

  @Input('media') media;

  constructor() {

  }
}
