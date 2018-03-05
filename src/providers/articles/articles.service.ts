import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


import { Article } from './../../models/article.interface';

@Injectable()
export class ArticlesProvider {

  itemsCollection: AngularFirestoreCollection<Article>;
  items: Observable<Article[]>;

  constructor(private af: AngularFirestore) {  
    this.itemsCollection = this.af.collection<Article>('articles');      
  }

  findAll(): Observable<Article[]> {
    this.itemsCollection = this.af.collection<Article>('articles');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Article;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.items;
  }

  findByCategory(id):Observable<Article[]> {
    this.itemsCollection = this.af.collection<Article>('articles');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Article;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.items;
  }

  findById(id: string): Observable<Article> {
    var itemDoc = this.af.doc<Article>(`articles/${id}`);
    console.log(itemDoc);
    return itemDoc.valueChanges();
  }

}
