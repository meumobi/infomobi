import { Component, ViewChild, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment';
import { 
  Content,
  NavController, 
  AlertController
} from 'ionic-angular';

import { AnalyticsProvider } from '@shared/analytics.service';
import { Post } from '@models/post.interface';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {
  @Input('rootNavCtrl') rootNavCtrl: NavController;
  @Input('post') post: Post;
  @ViewChild(Content) content: Content;
  comments: Comment[];
  fakeComments: Array<any> = new Array(5);
  author = false;
  filters = {
    isPublished: true,
    channel: 'live'
  }
  finished = false;
  
  constructor(
    private commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public analytics: AnalyticsProvider
  ) {}
  
  setFilters(data){
    this.analytics.trackEvent('Comments', 'Set Filters', data);
    for (var p in data) {
      this.filters[p] = data[p];
    }
    this.getComments();
  }
  
  ngOnInit() {
    if (this.post) {
      this.filters.channel = `post_${this.post._id}`;
    } 
    this.getComments();
  }

  loadMore(infinite) {
    if (this.finished || this.comments.length == 0) {
      infinite.complete();
      return;
    }
    this.analytics.trackEvent('Comments', 'Load More', this.filters);
    const lastItem = this.comments[this.comments.length-1];
    this.commentsProvider.search(this.filters, lastItem).subscribe(
      data => {
        this.comments = this.comments.concat(data);
        console.log(lastItem);
        console.log(this.comments[this.comments.length-1]);
        if (lastItem == this.comments[this.comments.length-1]) {
          this.finished = true;
        }
        infinite.complete();
      },
      err => {
        console.log(err);
      }
    );  
  }
  
  getComments() {
    this.analytics.trackEvent('Comments', 'Find All', this.filters);
    this.commentsProvider.search(this.filters, false).subscribe(
      data => {
        console.log(data);
        //TODO notify about new item when data.len > comments.len  
        this.comments = data;   
      },
      err => {
        console.log(err);
      }
    );
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
