import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '@models/post.interface';
import { CategoriesService } from '@providers/categories';
import { Category } from '@models/categories.interface';
import { PostsService } from '@providers/posts';

@IonicPage({
  segment: 'category/:id'
})
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage implements OnInit {
  
  categoryId: number;
  category: Category;
  rootNavCtrl: NavController;
  posts: Array<Post>;
  fakePosts: Array<any> = new Array(5);
  
  constructor(
    private postsService: PostsService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriesService: CategoriesService
  ) {      
    this.categoryId = navParams.data.id;
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }
  
  ngOnInit() {
    this.listArticles();
  }
  
  listArticles(refresher = null) {
    console.log(this.categoryId);
    if (this.categoryId) {   
      this.categoriesService.findById(this.categoryId)
      .then(
        data => this.category = data
      )
      this.postsService.findByCategory(this.categoryId)
      .then(
        data => {
          this.posts = data;
          console.log(data);
          if (refresher) {
            refresher.complete();
          }
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
    } else {      
      this.postsService.findAll()
      .then(
        data => {
          this.posts = data;
          if (refresher) {
            refresher.complete();
          }
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
    }
  }
  
  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }
  
}
