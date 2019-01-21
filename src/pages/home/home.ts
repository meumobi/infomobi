import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { AuthUser } from '@models/auth.interface';

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
  authUser: AuthUser = null;

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    public navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();
    this.authDataPersistenceService.getAuthDataObserver().subscribe(
      data => {
        if (data) {
          this.authUser = data.visitor;
        } else {
          this.authUser = null;
        }
      }
    );
  }

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
