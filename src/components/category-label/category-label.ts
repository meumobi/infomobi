import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesService } from '@providers/categories';

@Component({
  selector: 'category-label',
  templateUrl: 'category-label.html'
})
export class CategoryLabelComponent implements OnInit {
  @Input() id: number;
  rootNavCtrl: NavController;
  label: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriesService: CategoriesService    
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }
  
  ngOnInit () {
    console.log(this.id);
    if (this.id) {
      this.categoriesService.getCategoryName(this.id)
      .then(
        data => {
          this.label = data
        }
      )
    }
  }  
  
  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of category");
    }
  }
  
}
