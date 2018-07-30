import { Component, Input } from '@angular/core';
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {
  @Input() contact: any;
}
