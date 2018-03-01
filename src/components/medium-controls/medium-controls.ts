import { Component, Input } from '@angular/core';
import { FilesProvider } from '../../providers/files/';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'medium-controls',
  templateUrl: 'medium-controls.html'
})
export class MediumControlsComponent {
  @Input('medium') medium;
  progress = 0;
  constructor(
    private filesProvider: FilesProvider,
    private iab: InAppBrowser
  ) {    
  }

  ngOnInit() {  
    this.medium.status = "";
    this.filesProvider.getFilesFromStorage()
    .then(
      data => {
        this.medium = this.filesProvider.decorateFile(this.medium);
        this.filesProvider.getFileStatus     
      }
    )
  }

  link(){
    this.iab.create(this.medium.url,"_blank");
  }

  openLocal(){  
    this.filesProvider.openFile(this.medium);  
  }

  delete(){
    this.filesProvider.remove(this.medium).then(
      data => {
        this.medium = data;
      }
    );
  }

  download(){    
    this.filesProvider.download(this.medium).subscribe(
      data => {  
        this.medium = data;       
      }
    );
  }

  abort(){
    this.filesProvider.abort(this.medium);
  }

}

