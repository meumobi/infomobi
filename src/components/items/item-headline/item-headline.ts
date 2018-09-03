import { Component } from '@angular/core';

/**
 * Generated class for the ItemHeadlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-headline',
  templateUrl: 'item-headline.html'
})
export class ItemHeadlineComponent {

  text: string;

  constructor() {
    console.log('Hello ItemHeadlineComponent Component');
    this.text = 'Hello World';
  }

}
