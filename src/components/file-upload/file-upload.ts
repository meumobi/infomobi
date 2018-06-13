import { Component, EventEmitter, Output } from '@angular/core';
import { UploadProvider } from '@providers/upload/upload.service';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.html'
})
export class FileUploadComponent {
  @Output() fileUploadFinished = new EventEmitter(false);
  @Output() fileUploadStarted = new EventEmitter(false);
  files:Array<any>;
  images = [];


  constructor(private uploadProvider:UploadProvider) {
  }

  detectFiles(event) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.fileUploadStarted.emit();
      this.images = [reader.result];
      this.files = Array.from(event.target.files);
      this.uploadProvider.create(this.files[0]).then(
        data => {
          this.fileUploadFinished.emit(data);
        }
      );
    }
    reader.readAsDataURL(fileList.item(0));  
  }

  removeFile() {
    this.images.pop();
    this.files.pop();
  }


}
