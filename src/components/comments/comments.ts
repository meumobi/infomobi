import { Component, ViewChild, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment.interface';
import { 
  Content,
  NavController, 
  AlertController
} from 'ionic-angular';

import { MeuToastProvider } from '@shared/meu-toast.service';
import { Post } from '@models/post.interface';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {
  @Input('rootNavCtrl') rootNavCtrl :NavController;
  @Input('post') post :Post;
  
  @ViewChild(Content) content: Content;
  comments: Comment[];
  fakeComments: Array<any> = new Array(5);
  author = false;
  filters = {
    published: true,
    promoted: true,
    postId: null
  }
  
  constructor(
    private commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public toast: MeuToastProvider,
  ) {}
  
  setFilters(data){
    for (var p in data) {
      this.filters[p] = data[p];
    }
    this.findAll();
  }
  
  ngOnChanges() {
    if (this.post) {
      this.filters.postId = this.post._id;
      this.filters.promoted = false;
    } 
    this.findAll();
  }

  loadMore(infinite = null) {
    this.commentsProvider.findAll(this.filters, true).subscribe(
      data => {
        this.comments = this.comments.concat(data);
        if (infinite) {
          infinite.complete();
        }  
      },
      err => {
        console.log(err);
      }
    );
  }
  
  findAll() {
    this.commentsProvider.findAll(this.filters, false).subscribe(
      data => {
        //TODO notify about new item when data.len > comments.len  
        this.comments = data;   
      },
      err => {
        console.log(err);
      }
    );
  }
  
  updateComment(id: string, changes: any) {
    this.commentsProvider.update(id, changes).then(
      data => {
        this.toast.present("Comment Updated");
      }
    );
  }
  
  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });  
  }
  
  addComment() {
    this.author = true;
    this.rootNavCtrl.push(
      'comment-edit', {
        post: this.post
      }
    );
  }
  
}
