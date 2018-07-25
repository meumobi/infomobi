import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '@providers/contacts/';
import { ContactProfile } from '@models/contact-profile';
import { BehaviorSubject } from 'rxjs';

@IonicPage({
  segment: 'contacts'
})
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts: Array<ContactProfile>;
  rootNavCtrl: NavController;
  private searchTerm =new BehaviorSubject<string>('');

  constructor(
    private contactsService: ContactsService,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  filter(term) {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.search();
    this.searchTerm
    .debounceTime(300)
    .distinctUntilChanged()
    .subscribe(term => this.search(term))
  }

  search(term:string = '') {
    this.contactsService.search(term).subscribe(
      data => {
        this.contacts = data;   
      },
      err => {
        console.log(err);
      }
    );
  }

  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
