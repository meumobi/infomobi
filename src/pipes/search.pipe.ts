import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Filter an array of items, return items whose item.<field> contains <searchString>.
   * <ion-searchbar [(ngModel)]="search"></ion-searchbar>
   * ...
   * *ngFor="let site of sites | search:search:'title'"
   */
  transform(items: any[], searchString: string, field: string = 'name'): any {
    let matches: any[] = [];
    
    if (!searchString) {
      return items;
    }
    items.forEach( item => {
      if (item.hasOwnProperty(field) && item[field].match(new RegExp(searchString, 'i'))) {
        matches.push(item);
      }
    });

    return matches;
  }
}