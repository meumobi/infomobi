import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.html'
})
export class ContactListComponent {
  @Input('contacts') contacts;
  fakeContacts: Array<any> = new Array(5);
}