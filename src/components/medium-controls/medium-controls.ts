import { Component, Input, OnInit } from '@angular/core';
import { FilesProvider } from '@providers/files/files';

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
    private iab: InAppBrowser
  ) {
  }

  ngOnInit() {
    this.medium.status = '';
    this.filesProvider.getFilesFromStorage()
    .then(
      data => {
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

}

