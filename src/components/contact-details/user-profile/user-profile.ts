import { Component } from '@angular/core';

/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent {

  text: string;

  constructor() {
    console.log('Hello UserProfileComponent Component');
    this.text = 'Hello World';
  }

}
