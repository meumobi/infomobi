import { 
  Component, 
  ComponentFactoryResolver, 
  ViewChild, 
  ViewContainerRef, 
  OnInit
} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '@providers/contacts/';
import { ContactProfile} from '@models/contact-profile';
import * as contacts from '@components/contacts/contact';

@IonicPage({
  segment: 'contact/details/:id',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage implements OnInit {
  id: string;
  contact: ContactProfile;

  @ViewChild('details', { read: ViewContainerRef }) entry: ViewContainerRef;

  rootNavCtrl: NavController;
  componentRef: any;

  constructor(
    private contactsService: ContactsService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.id = this.navParams.data.id;    
  }

  ngOnInit(){
    this.findById(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }

  findById(id) {
    this.contactsService.findById(id)
      .subscribe(
        data => {
          this.contact = data;
          console.log(data);
          this.loadComponent();       
        }
      )
  }

  getComponentName(name: string) {
    return name.charAt(0).toUpperCase() + name.substr(1) + 'Component';
  }

  loadComponent() {
    this.entry.clear();
    const className = this.getComponentName(this.contact.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(contacts[className]);
    this.componentRef = this.entry.createComponent(componentFactory, this.entry.length, null);
    (this.componentRef.instance).contact = this.contact;
  }
}