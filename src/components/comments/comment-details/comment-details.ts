import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent {
  
  @Input('comment') comment;
  @Output() update = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  @Output() open = new EventEmitter(false);
  @Output() promote = new EventEmitter(false);

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  openPost() {
    this.open.emit({});
  }

  togglePublished() {
    this.update.emit({
      published: !this.comment.published
    })
  }

  toggleAnswered() {
    this.update.emit({
      answered: !this.comment.answered
    })
  }

  promoteComment() {
    this.promote.emit({});
  }

  deleteComment() {
    this.delete.emit({});
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of author");
    }
  }

}
