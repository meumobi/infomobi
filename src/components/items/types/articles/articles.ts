import { Component } from '@angular/core';

/**
 * Generated class for the ArticlesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'articles',
  templateUrl: 'articles.html'
})
export class ArticlesComponent {

  text: string;

  constructor() {
    console.log('Hello ArticlesComponent Component');
    this.text = 'Hello World';
  }

}
