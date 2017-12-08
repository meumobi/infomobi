import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//firebase
import { guid } from '../../helpers/helpers';

import * as firebase from 'firebase/app';
import 'firebase/storage'

import { Medium } from './../../models/medium.interface';

@Injectable()
export class MediaProvider {
  constructor() {}
  create(medium: Medium) {
    medium.createdAt = firebase.database.ServerValue.TIMESTAMP;
    let fileName = guid();
    let storageRef = firebase.storage().ref();      
    let uploadTask = storageRef.child(`${medium.path}/${fileName}`).put(medium.file);
    return uploadTask.then(
      (snapshot) => {
        medium.url = snapshot.downloadURL;        
        return medium;
      }
    );       
  }  

}
