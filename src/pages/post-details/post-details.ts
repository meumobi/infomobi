import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { PostsProvider } from '@providers/posts';

@IonicPage({
  //name: 'post-details',
  segment: 'post/details/:id',
  defaultHistory: ['PostsPage'],
})
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  post: Post;
  rootNavCtrl: NavController;

  constructor(
    private postsProvider: PostsProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    let id = this.navParams.data.id;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findById(id);
  }

  findById(id) {
    this.postsProvider.findById(id)
      .then(data => {
        this.post = data;
      })
  }

}
