import { Component, ViewChild, Input } from '@angular/core';
import { CommentsProvider } from '@providers/comments';
import { Comment } from '@models/comment.interface';
import { 
  Content,
  NavController, 
  AlertController
} from 'ionic-angular';

import { MeuToastProvider } from '@shared/meu-toast.service';
import { Post } from '@models/post.interface';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {
  @Input('rootNavCtrl') rootNavCtrl :NavController;
  @Input('post') post :Post;

  @ViewChild(Content) content: Content;
  comments: Comment[];
  fakeComments: Array<any> = new Array(5);
  subscription: any;
  author = false;
  
  constructor(
    private commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public toast: MeuToastProvider,
  ) {
    this.findAll();
    setTimeout(() => {
      if (this.post) {
        this.findById(this.post._id);
      }
    }, 3000);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePage');
  }
  
  findAll() {
    this.subscription = this.commentsProvider.findAll().subscribe(
      data => {
        if (this.content && this.comments && !this.author) {
          //TODO only show when data.len > comments.len
          //this.newPosts();         
        }
        this.comments = data;      
      },
      err => {
        console.log(err);
      }
    );
  }

  findById(id) {
    this.subscription = this.commentsProvider.findByPost(id).subscribe(
      data => {
        this.comments = data;      
      },
      err => {
        console.log(err);
      }
    );
  }
  
  updateComment(id: string, changes: any) {
    this.commentsProvider.update(id, changes).then(
      data => {
        this.toast.present("Comment Updated");
      }
    );
  }


  newPosts() {
    // let toast = this.toastCtrl.create({
    //   message: "New Comments",
    //   duration: 5000,
    //   position: 'top',
    //   showCloseButton: true,
    //   closeButtonText: "↑"
    // });
    
    // toast.onDidDismiss((data, role) => {
    //   if (role == 'close') {
    //     this.content.scrollToTop(500);
    //   }
    //   console.log('Dismissed toast');
    // });
    // toast.present();        
  }

  pushDetailsPage(page: string, id: string) {
    this.subscription.unsubscribe();
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });  
  }
  
  addComment() {
    this.author = true;
    this.rootNavCtrl.push(
      'comment-edit', {}
    );
  }

}
