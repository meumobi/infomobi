import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@models/post.interface';
import { ApiService } from '@providers/api';

@Injectable()
export class PostsService  {
  
  constructor(
    public http: HttpClient,
    public apiService: ApiService,
  ) {
    console.log('Hello PostsProvider Provider');
  }

  findById(id: string):Promise<Post> {
    return this.apiService.fetchItemById(id);
  }
  
  findAll():Promise<Post[]> {
    return this.apiService.fetchLatestItems();
  }

  findByCategory(id): Promise<Post[]> {
    return this.apiService.fetchLatestItems();
  }
}
