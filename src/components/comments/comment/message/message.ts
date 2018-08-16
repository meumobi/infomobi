import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController, ItemSliding } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import { TranslateService } from '@ngx-translate/core';
import { CommentsProvider } from '@providers/comments';
import { MeuToastService } from '@shared/meu-toast.service';

@Component({
  templateUrl: 'message.html',
  selector: 'message'
})
export class MessageComponent implements Comment {
  @Input() comment: any;
  rootNavCtrl: NavController;
  promoteEnabled: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commentsService: CommentsProvider,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    private meutToastService: MeuToastService
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
          handler: () => {
            item.close();
          }
        },
        {
          text: this.translateService.instant('Delete'),
          handler: () => {
            this.commentsService.delete(this.comment.id)
            .then(data => this.meutToastService.present(this.translateService.instant("Comment deleted")));
          }
        }
      ]
    });
    alert.present();   
  }

  promoteComment(item: ItemSliding) {
    if (this.promoteEnabled) {      
      this.promoteEnabled = false;
      this.commentsService.promote(this.comment)
      .then(
        data => {
          this.promoteEnabled = true;
          this.meutToastService.present(this.translateService.instant("Comment promoted"))
        }
      );
    }
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