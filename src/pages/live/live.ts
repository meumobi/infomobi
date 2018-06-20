import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import { Content } from 'ionic-angular';
import { CommentsProvider } from '@providers/comments';
import { ToastController } from 'ionic-angular';
import { MeuToastProvider } from '@shared/meu-toast.service';


@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  
  @ViewChild(Content) content: Content;
  comments: Comment[];
  rootNavCtrl: NavController;
  fakeComments: Array<any> = new Array(5);
  subscription: any;
  author = false;
  
  constructor(
    private commentsProvider: CommentsProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public toast: MeuToastProvider,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.findAll();
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
  
  updateComment(id: string, changes: any) {
    this.commentsProvider.update(id, changes).then(
      data => {
        this.toast.present("Comment Updated");
        //alert('ce é o bixão mesmo');
      }
    );
  }


  newPosts() {
    let toast = this.toastCtrl.create({
      message: "New Comments",
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: "↑"
    });
    
    toast.onDidDismiss((data, role) => {
      if (role == 'close') {
        this.content.scrollToTop(500);
      }
      console.log('Dismissed toast');
    });
    toast.present();        
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

