import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  live: any = 'LivePage';
  contacts: any = 'ContactsPage';
  items: any = 'ItemsPage';
  authData$: Observable<any>;

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    public navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
  }
 
  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
