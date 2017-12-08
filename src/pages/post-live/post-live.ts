import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Medium } from './../../models/Medium.interface';
import { MediaProvider } from './../../providers/media/';
import { Post } from './../../models/post.interface';
import { PostsProvider } from './../../providers/posts/';

@IonicPage({
	name: 'post-live'
})
@Component({
  selector: 'page-post-live',
  templateUrl: 'post-live.html',
})

export class PostLivePage {
	files: FileList;
  description: string;

  constructor(
    private media: MediaProvider,
    private posts: PostsProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {  	
  }

  detectFiles(event){
  	this.files = event.target.files;
  }

  onSubmit() {    
    if (this.files){
      let loader = this.loadingCtrl.create({});
      loader.present(); 
      let file = this.files.item(0);
      this.media.create({
        file: file,
        path: "/live",
      }).then(
        (medium) => { 
          loader.dismiss(); 
          this.posts.create({
            author: {
              displayName: "Luiza Bittencourt",
              picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
            },
            description: this.description,
            media: [medium]
          });
          this.navCtrl.pop();                  
        }
      );
    } else {
      this.posts.create({
        author: {
          displayName: "Luiza Bittencourt",
          picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        description: this.description
      });
      this.navCtrl.pop();   
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostLivePage');
  }
}

