import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { 
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable 
} from 'angularfire2/database';

import { Category } from './../../models/category.interface';

@Injectable()
export class CategoriesProvider {

  items$: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFireDatabase) {
    this.items$ = af.list('/categories',{
      query: {
        orderByChild: 'title',
      }      
    });
  }

  findAll(): FirebaseListObservable<Category[]> {
    return this.items$;
  }

}
