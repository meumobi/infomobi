import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment';
import {
  Content,
  NavController,
  AlertController
} from 'ionic-angular';

import { AnalyticsProvider } from '@shared/analytics.service';
import { Item } from '@models/item.interface';
import { UserProfileService } from '@providers/user-profile';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent implements OnInit {
  @Input() rootNavCtrl: NavController;
  @Input() item: Item;
  @ViewChild(Content) content: Content;

  comments: Comment[];
  fakeComments: Array<any> = new Array(5);
  author = false;
  filters = {
    isPublished: true,
    channel: 'live',
    domain: ''
  };
  finished = false;

  constructor(
    private commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public analytics: AnalyticsProvider,
    private userProfile: UserProfileService
  ) {}

  setFilters(data) {
    this.analytics.trackEvent('Comments', 'Set Filters', data);
    for (const p in data) {
      if (data.hasOwnProperty(p)) {
        this.filters[p] = data[p];
      }
  }
    this.getComments();
  }

  ngOnInit() {
    if (this.item) {
      this.filters.channel = `item_${this.item._id}`;
    }
    this.userProfile.current$.subscribe(
      data => {
        if (data.domain) {
          this.filters.domain = data.domain;
          this.getComments();
        }
      }
    );
  }

  loadMore(infinite) {
    if (this.finished || this.comments.length === 0) {
      infinite.complete();
      return;
    }
    this.analytics.trackEvent('Comments', 'Load More', this.filters);
    const lastItem = this.comments[this.comments.length - 1];
    this.commentsProvider.search(this.filters, lastItem).subscribe(
      data => {
        this.comments = this.comments.concat(data);
        if (lastItem === this.comments[this.comments.length - 1]) {
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
        // TODO notify about new item when data.len > comments.len

        this.comments = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  addComment() {
    this.analytics.trackEvent('Comments', 'Add Comment', this.item);
    this.author = true;
    this.rootNavCtrl.push(
      'comment-edit', {
        item: this.item
      }
    );
  }
}
