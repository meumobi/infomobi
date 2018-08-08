import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPathForContactType'
})
export class IconPathForContactTypePipe implements PipeTransform {
  
  transform(type) {
    let iconPath : string;

    switch(type) {
      case 'desk':
        iconPath = './assets/images/icon-people.png'
        break;
      default: {
        iconPath = './assets/images/icon-person.png'
        break;
      }
    }
    return iconPath;
  }
}