import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { PostsProvider } from '@providers/posts';

@IonicPage({
  segment: 'post/details/:id',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {
  @ViewChild('comments') comments; //this is necessary to allow FAB interact with comments component

  id: string;
  post: Post;

  constructor(
    private postsProvider: PostsProvider,
    public rootNavCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    console.log(this.navParams);
    this.id = this.navParams.data.id;
    this.findById(this.id);
  }
  
  findById(id) {
    this.postsProvider.findById(id)
      .then(data => {
        this.post = data;
      })
  }
}
