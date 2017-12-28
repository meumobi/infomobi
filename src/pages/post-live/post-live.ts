import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MediaProvider } from './../../providers/media/';
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
  articleId: string;
  articleTitle: string;
  published: boolean;
  constructor(
    private media: MediaProvider,
    private posts: PostsProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  	
    this.articleId = ((this.navParams.data.articleId) ? this.navParams.data.articleId : null);
    this.articleTitle = ((this.articleId) ? this.navParams.data.articleTitle : null);    
    this.published = ((this.articleId) ? false : true);
  }

  detectFiles(event) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.images = [reader.result];
      this.files = Array.from(event.target.files);
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  removeFile() {
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
            published: this.published,
            articleId: this.articleId, 
            articleTitle: this.articleTitle, 
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
        published : this.published,
        articleId: this.articleId, 
        articleTitle: this.articleTitle, 
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

