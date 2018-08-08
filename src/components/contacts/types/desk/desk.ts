import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProfileService } from '@providers/user-profile';

@Component({
  selector: 'desk',
  templateUrl: 'desk.html'
})
export class DeskComponent implements OnInit {
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
    this.admin = this.userProfileService.current$.value.role == "admin";
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
