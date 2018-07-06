import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Comment } from '@models/comment.interface';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent {
  
  @Input('comment') comment: Comment;
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

  ngOnChanges() {
    if (this.comment) {
      console.log(this.comment);

      this.comment["content"] = {
        anniversaries: [
          {
            displayName: "Daniel Conte",
            birthday: "05 de julho",
            picture: "https://scontent.fcfc5-1.fna.fbcdn.net/v/t31.0-8/18814705_1411170572276982_4547569753680785303_o.jpg?_nc_cat=0&oh=de6e6651e3800950219c43e18248d1b6&oe=5BDC9C03"
          }
        ]
      }; 
      console.log(this.comment);

    }
  }

  openPost() {
    this.open.emit({});
  }

  togglePublished() {
    this.update.emit({
      published: !this.comment.published
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
