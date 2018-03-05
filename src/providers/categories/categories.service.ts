import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { 
  AngularFireDatabase, 
  // FirebaseListObservable
} from 'angularfire2/database';

import { Category } from './../../models/category.interface';

@Injectable()
export class CategoriesProvider {

  // items$: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFireDatabase) {}

  // findAll(): FirebaseListObservable<Category[]> {
  //   this.items$ = this.af.list('/categories',{
  //     query: {
  //       orderByChild: 'title',
  //     }      
  //   }) as FirebaseListObservable<Category[]>;

  //   return this.items$;
  // }

}
