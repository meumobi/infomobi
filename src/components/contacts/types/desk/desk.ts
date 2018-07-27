import { Component, Input } from '@angular/core';
@Component({
  selector: 'desk',
  templateUrl: 'desk.html'
})
export class DeskComponent {
  @Input() contact: any;
}
