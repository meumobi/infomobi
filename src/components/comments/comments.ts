import { Component, ViewChild, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment.interface';
import { 
  Content,
  NavController, 
  AlertController
} from 'ionic-angular';

import { MeuToastProvider } from '@shared/meu-toast.service';
import { AnalyticsProvider } from '@shared/analytics.service';
import { Post } from '@models/post.interface';
import { TranslateService } from '@ngx-translate/core';

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
    postId: null
  }
  
  constructor(
    private commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public toast: MeuToastProvider,
    public analytics: AnalyticsProvider,
    private translateService: TranslateService,
  ) {}
  
  setFilters(data){
    this.analytics.trackEvent('Comments', 'Set Filters', data);
    for (var p in data) {
      this.filters[p] = data[p];
    }
    this.findAll();
  }
  
  ngOnChanges() {
    if (this.post) {
      this.filters.postId = this.post._id;
    } 
    this.findAll();
  }

  loadMore(infinite) {
    setTimeout(() => {
      this.analytics.trackEvent('Comments', 'Load More', this.filters);
      this.commentsProvider.findAll(this.filters, this.comments[this.comments.length-1]).subscribe(
        data => {
          this.comments = this.comments.concat(data);
          infinite.complete();
        },
        err => {
          console.log(err);
        }
      );
    },300);
  }
  
  findAll() {
    this.analytics.trackEvent('Comments', 'Find All', this.filters);
    this.commentsProvider.findAll(this.filters, null).subscribe(
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
    this.analytics.trackEvent('Comments', 'Update Comment', id);
    this.commentsProvider.update(id, changes).then(
      data => {
        this.toast.present(this.translateService.instant("Comment updated"));
      }
    );
  }

  deleteComment(id: string) {
    this.commentsProvider.delete(id).then(
      data => {
        this.toast.present(this.translateService.instant("Comment deleted"));
      }
    );
  }
  
  promoteComment(comment: Comment) {
    var newComment: Comment = {
      author: comment.author,
      link: comment.postId,
      description: comment.description,
      published: true,
      postTitle: comment.postTitle,
      media: (comment.media) ? comment.media: null,
      postId: null
    }
    this.commentsProvider.save(newComment).then(
      data => {
        this.toast.present(this.translateService.instant("Comment promoted"));
      }
    );
  }

  openPost(id: string) {
    this.rootNavCtrl.push('PostDetailsPage', {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });  
  }

  addComment() {
    this.analytics.trackEvent('Comments', 'Add Comment', this.post);
    this.author = true;
    this.rootNavCtrl.push(
      'comment-edit', {
        post: this.post
      }
    );
  }
  
}
