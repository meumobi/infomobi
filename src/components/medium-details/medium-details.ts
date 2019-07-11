import { Component, Input } from '@angular/core';

@Component({
  selector: 'medium-details',
  templateUrl: 'medium-details.html'
})
export class MediumDetailsComponent {
  @Input() medium;
  constructor() {}

}
