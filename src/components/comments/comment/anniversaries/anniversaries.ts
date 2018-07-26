import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController, ItemSliding } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import { TranslateService } from '@ngx-translate/core';
import { CommentsProvider } from '@providers/comments';

@Component({
  templateUrl: 'anniversaries.html'
})
export class AnniversariesComponent implements Comment {
  @Input() comment: any;
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commentsService : CommentsProvider,
    private translateService: TranslateService,
    private alertCtrl: AlertController,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  deleteComment(item: ItemSliding) {
    const alert = this.alertCtrl.create({
      title:  this.translateService.instant('Delete'),
      message: this.translateService.instant('Do you want to delete this comment?'),
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
          role: 'cancel',
        },
        {
          text: this.translateService.instant('Delete'),
          handler: () => {
            this.commentsService.delete(this.comment.id);
          }
        }
      ]
    });
    alert.present();  
    item.close();
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