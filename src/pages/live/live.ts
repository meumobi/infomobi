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
  subscription: any;

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
    this.subscription = this.data.findAll().subscribe(
      data => {
        this.comments = data;
        if (this.content) {
          this.content.scrollToTop(500);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  pushDetailsPage(page: string, id: string) {
    this.subscription.unsubscribe();
    this.rootNavCtrl.push(page, {
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

