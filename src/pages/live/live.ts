import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Post } from './../../models/post.interface';
import { PostsProvider } from './../../providers/posts/';

@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {

  posts: Post[];

  constructor(
    private data: PostsProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.findAll();
  }

  findAll() {
    this.data.findAll().subscribe(
      data => {
        this.posts = data;//.reverse();
      },
      err => {
        console.log(err);
      }
    );
  }

  addPost() {
    let prompt = this.alertCtrl.create({
      title: 'Your Comment',
      message: "Type your comment",
      inputs: [
        {
          name: 'description',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.data.create({
              author: {
                displayName: "Luiza Bittencourt",
                picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
              },
              description: data.description
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
