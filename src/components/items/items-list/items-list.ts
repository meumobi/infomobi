import { Component } from '@angular/core';

/**
 * Generated class for the ItemsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent {

  text: string;

  constructor() {
    console.log('Hello ItemsListComponent Component');
    this.text = 'Hello World';
  }

}
