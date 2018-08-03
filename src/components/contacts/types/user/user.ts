import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProfileService } from '@providers/user-profile';

@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent implements OnInit {
  @Input() contact: any;
  rootNavCtrl: NavController;
  admin: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProfileService: UserProfileService    
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }
  
  ngOnInit() {
    console.log(this.contact._id);
    this.admin = this.userProfileService.current$.value.role == "admin" || this.userProfileService.current$.value._id == this.contact._id;
    console.log(this.admin);
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of author");
    }
  }
}

