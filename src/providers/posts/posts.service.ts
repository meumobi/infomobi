import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ENV } from '@env';
import { Post } from '@models/post.interface';
import posts from './mock-posts';
import Utils from '@shared/utils';

@Injectable()
export class PostsProvider implements OnInit {
  
  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }
  
  ngOnInit(): void {
    
  }
  
  findById(id):Promise<Post> {
    let data = Utils.lookup(posts);
    return Promise.resolve(data[id]);
  }
  
  findAll():Promise<Post[]> {
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
        'X-Visitor-Token': '94086d89cce67659fe83eb72a548cd5707e6a800'
      }
    };
    
    const url = ENV.meumobi.apiUrl + "/api/katrium.meumobi.com/items/latest";
    
    return this.http.get(url, httpOptions).toPromise()
    .then(
      (res: any) => {
        return res.items;
      }
    );
  }
}
