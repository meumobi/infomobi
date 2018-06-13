import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { Comment } from '@models/comment.interface';
import { PostsProvider } from '@providers/posts';
import { CommentsProvider } from '@providers/comments';
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
    private commentsProvider: CommentsProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: MeuToastProvider,
  ) {
    this.navCtrl = navParams.get('rootNavCtrl');
    console.log(this.navParams);
    this.id = this.navParams.data.id;
    this.findById(this.id);
    this.fetchComment(this.id);
  }

  findById(id) {
    this.postsProvider.findById(id)
      .then(data => {
        this.post = data;
      })
  }

  fetchComment(id) {
    this.commentsProvider.findByPost(id).subscribe(
      data => {
        this.comments = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  removeComment(id) {
    this.commentsProvider.remove(id).then(
      data => {this.toast.present("Comment Removed");}
    );
  }

  promoteComment(id) {
    this.commentsProvider.promote(id).then(
      data => {this.toast.present("Comment Promoted");}
    );
  }

  demoteComment(id) {
    this.commentsProvider.demote(id).then(
      data => {this.toast.present("Comment Demoted");}
    );
  }

  addComment() {
    this.navCtrl.push(
      'comment-edit', {
        postId: this.id,
        postTitle: this.post.title,
      }
    );
  }



}
