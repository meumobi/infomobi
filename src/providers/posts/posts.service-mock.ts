import { Injectable } from '@angular/core';
import posts from './mock-posts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import Utils from '../../shared/utils';
import { Post } from './../../models/post.interface';

/*
Source: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
*/ 
export function compare(a, b) {

  const priorityA = a.priority;
  const priorityB = b.priority;

  let comparison = 0;
  if (priorityA > priorityB) {
    console.log(priorityA + ' > ' + priorityB);
    comparison = 1;
  } else if (priorityA < priorityB) {
    comparison = -1;
  }
  return comparison;
}

@Injectable()
export class PostsProvider {
  data: any;

  findAll() {
    //return Promise.resolve(posts);
    if (!this.data) {
      this.data = posts.sort(compare);
    }
    console.log(posts);
    console.log(this.data);
    return Observable.of(this.data);
  }

  findById(id) {
    let data = Utils.lookup(posts);
    return Observable.of(data[id]);
  }

  create(post: Post) {
    post.createdAt = Date.now();
    post.priority = 0 - Date.now();

    const posts = this.data
    posts.push(post)
    posts.sort(compare);
    this.data = posts
    return this.data;
  }
}
