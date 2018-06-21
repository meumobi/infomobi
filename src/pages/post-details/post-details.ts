import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { Comment } from '@models/comment.interface';
import { PostsProvider } from '@providers/posts';
import { MeuToastProvider } from '@shared/meu-toast.service';

@IonicPage({
  segment: 'post/details/:id',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  id: string;
  post: Post;
  comments: Comment[];

  constructor(
    private postsProvider: PostsProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: MeuToastProvider,
  ) {
    this.navCtrl = navParams.get('rootNavCtrl');
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
