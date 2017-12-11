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
  files:Array<any>;
  description: string;
  images = [];

  constructor(
    private media: MediaProvider,
    private posts: PostsProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {  	
  }

  detectFiles(event){
    let fileList: FileList = event.target.files;
  	this.files = Array.from(event.target.files)
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.images = [reader.result];
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  removeFile(){
    this.images.pop();
    this.files.pop();
  }

  onSubmit() {    
    if (this.images.length > 0){
      let loader = this.loadingCtrl.create({});
      loader.present(); 
      let file = this.files[0];
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

