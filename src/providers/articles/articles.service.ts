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
    this.items$ = af.list('/articles', {
      // query: {
      //   limitToLast: 20,
      //   orderByChild: 'priority',
      // }      
    });
  }


  findAll(): FirebaseListObservable<Article[]> {
    return this.items$;
  }

  findById(id: string): FirebaseObjectObservable<Article> {
  	return this.af.object(`articles/${id}`);
  }

}
