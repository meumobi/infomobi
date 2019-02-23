import { Component, Input, OnInit } from '@angular/core';
import { FilesProvider } from '@providers/files/files';
import { SocialSharingService } from '@providers/social-sharing';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'medium-controls',
  templateUrl: 'medium-controls.html'
})
export class MediumControlsComponent implements OnInit {
  @Input() medium;
  progress = 0;
  constructor(
    private filesProvider: FilesProvider,
    private socialSharingService: SocialSharingService,
    private translateService: TranslateService,
    private meuToastService: MeuToastService,
    private iab: InAppBrowser,
  ) {
  }

  ngOnInit() {
    this.medium.status = '';
    this.filesProvider.getFilesFromStorage()
    .then(
      () => {
        this.medium = this.filesProvider.decorateFile(this.medium);
      }
    );
  }

  link() {
    this.iab.create(this.medium.url, '_blank');
  }

  openLocal() {
    this.filesProvider.openFile(this.medium);
  }

  delete() {
    this.filesProvider.remove(this.medium).then(
      data => {
        this.medium = data;
      }
    );
  }

  download() {
    this.filesProvider.download(this.medium).subscribe(
      data => {
        this.medium = data;
      }
    );
  }

  abort() {
    this.filesProvider.abort(this.medium);
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

