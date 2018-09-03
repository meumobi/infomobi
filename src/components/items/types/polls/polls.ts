import { Component } from '@angular/core';

/**
 * Generated class for the PollsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'polls',
  templateUrl: 'polls.html'
})
export class PollsComponent {

  text: string;

  constructor() {
    console.log('Hello PollsComponent Component');
    this.text = 'Hello World';
  }

}
