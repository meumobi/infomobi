import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import { Content } from 'ionic-angular';
import { CommentsProvider } from '@providers/comments';

@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {

  @ViewChild(Content) content: Content;
  comments: Comment[];
  rootNavCtrl: NavController;
  fakeComments: Array<any> = new Array(5);

  constructor(
    private data: CommentsProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePage');
  }


  findAll() {
    this.data.findAll().subscribe(
      data => {
        console.log(data);
        this.comments = data;
        this.content.scrollToTop(500);
      },
      err => {
        console.log(err);
      }
    );
  }

  viewArticle(id: string) {
    this.rootNavCtrl.push('article-details', {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }

  addComment() {
    this.rootNavCtrl.push(
      'comment-edit', {}
    );
  }

}

