import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { Comment } from '@models/comment';

import { PostsService } from '@providers/posts';

@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  posts:Post[];
  comments:Comment[];

  constructor(
    private postsService: PostsService
  ) {
    this.fetchPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
  }

  fetchPosts() {
    this.postsService.findAll()
    .then(
      data => {
        this.posts = data;
      })
    .catch(
      err => {
        console.log(err);
      }
    );
  }

}

