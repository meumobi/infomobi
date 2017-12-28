import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

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
  }


  findAll(): FirebaseListObservable<Article[]> {
    this.items$ = this.af
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
    return this.items$;
  }

  findByCategory(id):FirebaseListObservable<Article[]> {
    this.items$ = this.af
        .list('/articles',{
          query: {
            orderByChild: 'parent_id',
            equalTo: +id,
          }           
        })
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
      return this.items$;
  }

  findById(id: string): FirebaseObjectObservable<Article> {
  	return this.af.object(`articles/${id}`);
  }

}
