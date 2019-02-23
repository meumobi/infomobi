import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item, Article } from '@models/item.interface';
import { ItemsService } from '@providers/items';
import { SocialSharingService } from '@providers/social-sharing';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage({
  segment: 'article/details/:id',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-articles-details',
  templateUrl: 'articles-details.html',
})
export class ArticlesDetailsPage {
  @ViewChild('comments') comments; // this is necessary to allow FAB interact with comments component
  id: string;
  article: Item;

  constructor(
    private itemsService: ItemsService,
    public rootNavCtrl: NavController,
    public navParams: NavParams,
    private socialSharingService: SocialSharingService,
    private translateService: TranslateService,
    private meuToastService: MeuToastService,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.id = this.navParams.data.id;
    this.findById(this.id);
  }

  findById(id) {
    this.itemsService.fetchById(id)
      .then(data => {
        this.article = data;
      });
  }

  shareItem(article: Article) {
    this.socialSharingService.shareItem(article)
    .then(
      data => {
        if (data.hasOwnProperty('message')) {
          this.meuToastService.present(this.translateService.instant(data.message));
        }
      }
    );
  }
}
