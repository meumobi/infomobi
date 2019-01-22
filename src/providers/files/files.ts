import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Storage } from '@ionic/storage';
import { FileOpener } from '@ionic-native/file-opener';
import { Md5 } from 'ts-md5/dist/md5';
import { cordovaWarn } from '@ionic-native/core';
import { Platform } from 'ionic-angular/platform/platform';

@Injectable()
export class FilesProvider {
  private files = {};
  private fileTranfers = {};

  private options = {
    localFolder: 'Downloads'
  };
  private mimes = {
    'application/pdf': {
      label: 'View',
      icon: 'eye',
      extension: 'pdf',
      download: true
    },
    'text/html': {
      label: 'Open',
      icon: 'open',      
      extension: 'html',
      download: false
    },
    'application/vnd.youtube.video+html': {
      label: 'Play',
      icon: 'play',         
      extension: 'html',
      download: false
    },
    'application/vnd.ms-excel': {
      label: 'View',
      icon: 'eye',
      extension: 'xls',
      download: true
    },
    'audio/mpeg': {
      label: 'Play',
      icon: 'play',
      extension: 'mp3',
      download: true
    },
    'video/mp4': {
      label: 'Play',
      icon: 'play',
      extension: 'mp4',
      download: true
    },
    'application/vnd.ms-powerpoint': {
      class: 'fa-file-powerpoint-o',
      label: 'View',
      icon: 'download',
      extension: 'ppt',
      download: true,
    },
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      label: 'View',
      icon: 'eye',
      extension: 'xlsx',
      download: true
    }
  }

  constructor(    
    private fileTransfer: FileTransfer,
    private storage: Storage,
    private file: File,
    private fileOpener: FileOpener,
    public plt: Platform
  ) {   
  }

  getFilesFromStorage() {
    return this.storage.get('files')
    .then(
      (data) => {
        if (data) {
          this.files = data;     
        }
      }
    );
  }

  getBehavior(fileType) {
    return this.mimes[fileType];
  }  

  openFile(file) {
    this.fileOpener.open(file.fullPath,file.type);
  }

  addFile(file) { 
    this.files[file.path] = file;
    this.storage.set('files',this.files);    
  }

  removeFile(file) {
    delete this.files[file.path];
    this.storage.set('files',this.files);        
  }

  remove(file) {
    this.removeFile(file);
    return this.getFileEntry(file.fullPath)
    .then(
      (data) => {
        this.file.removeFile(this.file.dataDirectory,file.path);  
        file.status = 'download';
        return file;
      }
    )     
  }

  getFilePath(fileName) {
    return this.options.localFolder + '/' + fileName;
  }

  getFileFullPath(filePath) {
    return this.file.dataDirectory + filePath;
  }

  getFileName(file) {
    let ext = this.mimes[file.type].extension;            
    let name = Md5.hashStr(file.url);                      
    return name + '.' + ext;
  }

  getFileStatus(filePath) {
    if (this.files[filePath]) {      
      return 'downloaded';
    } else {
      return 'download';
    }
  }

  decorateFile(file) {
    file.behavior = this.getBehavior(file.type);
    console.log('Files Provider, decorateFile');
    console.log(file);
    if (file.behavior.download && this.plt.is('cordova')) {
      file.name = file.name || this.getFileName(file);
      file.path = file.path || this.getFilePath(file.name);
      file.status = this.getFileStatus(file.path);
      file.fullPath = this.getFileFullPath(file.path);
    } else {
      file.status = 'open_by_link';
    }    
    return file;
  }

  abort(file) {
    this.fileTranfers[file.path].abort();
  }

  getFileEntry(fullPath):Promise<any> {
    return this.file.resolveLocalFilesystemUrl(fullPath);
  }
  
  download(file):BehaviorSubject<any> {   
    this.fileTranfers[file.path] = this.fileTransfer.create();      
    let result = new BehaviorSubject<any>(file);
    file.status = 'downloading';
    result.next(file);
    this.fileTranfers[file.path]     
    .download(file.url,file.fullPath)
    .then(
      (data) => {
        this.getFileEntry(file.fullPath)
        .then(
          (data) => {
            if (data.isFile) {
              file.status = 'downloaded';
              this.addFile(file);
              result.next(file);
            } else {
              file.status = 'download';
              result.next(file); 
            }  
          }
        )                
      },
      (error) => {
        file.status = 'download';
        result.next(file);  
      }
    ); 
    return result;
  }






}
