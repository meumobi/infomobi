import { Component, Input } from '@angular/core';

/**
 * Generated class for the ContactHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-header',
  templateUrl: 'contact-header.html'
})
export class ContactHeaderComponent {

  @Input() contact;

  constructor() {
    console.log('Hello ContactHeaderComponent Component');
  }

}
