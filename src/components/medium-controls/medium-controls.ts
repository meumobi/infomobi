import { Component, Input, OnInit } from '@angular/core';
import { SocialSharingService } from '@providers/social-sharing';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MediaService } from '@meumobi/mmb-media-provider';

@Component({
  selector: 'medium-controls',
  templateUrl: 'medium-controls.html'
})
export class MediumControlsComponent implements OnInit {
  @Input() medium;
  progress = 0;
  constructor(
    private mediaService: MediaService,
    private socialSharingService: SocialSharingService,
    private translateService: TranslateService,
    private meuToastService: MeuToastService,
    private iab: InAppBrowser,
  ) {
  }

  ngOnInit() {
    this.medium.status = '';
    this.mediaService.getFilesFromStorage()
    .then(
      () => {
        this.mediaService.decorateFile(this.medium)
        .then(
          (data) => this.medium = data
        );
      }
    );
  }

  link() {
    this.iab.create(this.medium.url, '_blank');
  }

  openLocal() {
    this.mediaService.openFile(this.medium);
  }

  delete() {
    this.mediaService.remove(this.medium).then(
      data => {
        this.medium = data;
      }
    );
  }

  download() {
    this.mediaService.download(this.medium).subscribe(
      data => {
        this.medium = data;
      }
    );
  }

  abort() {
    this.mediaService.abort(this.medium);
  }

  shareMedia() {
    this.socialSharingService.shareMedia(this.medium)
    .then(
      data => {
        if (data.hasOwnProperty('message')) {
          this.meuToastService.present(this.translateService.instant(data.message));
        }
      }
    );
  }

}

