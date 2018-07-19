import { Component } from '@angular/core';

/**
 * Generated class for the DeskProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'desk-profile',
  templateUrl: 'desk-profile.html'
})
export class DeskProfileComponent {

  text: string;

  constructor() {
    console.log('Hello DeskProfileComponent Component');
    this.text = 'Hello World';
  }

}
