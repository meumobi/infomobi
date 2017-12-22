import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { 
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable 
} from 'angularfire2/database';

import { Article } from './../../models/article.interface';

@Injectable()
export class ArticlesProvider {

  items$: FirebaseListObservable<Article[]>;

  constructor(private af: AngularFireDatabase) {
    this.items$ = af
      .list('/articles')
      .map(items => items.sort( function(a,b) {
        if (a.order < b.order) {
          return 1;
        }
        if (a.order > b.order) {
          return -1;
        }
        return 0;   
      })
    ) as FirebaseListObservable<Article[]>;
  }


  findAll(): FirebaseListObservable<Article[]> {
    return this.items$;
  }

  findById(id: string): FirebaseObjectObservable<Article> {
  	return this.af.object(`articles/${id}`);
  }

}
