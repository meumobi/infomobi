import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentDescription } from '@models/comment-description.interface';

@Component({
  templateUrl: 'message.html',
  selector: 'message'
})
export class MessageComponent implements CommentDescription {
  @Input() comment: any;
  @Output() teste = new EventEmitter(false);
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  deleteComment() {
    this.teste.emit(true);
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