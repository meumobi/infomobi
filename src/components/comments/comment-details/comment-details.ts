import { 
  Component, 
  Input, 
  OnInit, 
  ViewChild, 
  ViewContainerRef,
  ComponentFactoryResolver, 
  OnDestroy
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Comment } from '@models/comment.interface';
import * as description from '../comment/.';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent implements OnInit, OnDestroy  {
  
  @Input('comment') comment;
  @ViewChild('details', { read: ViewContainerRef }) entry: ViewContainerRef;

  rootNavCtrl: NavController;
  componentRef: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy(); 
  }

  getComponentName(name: string) {
    return name.charAt(0).toUpperCase() + name.substr(1) + 'Component';
  }

  loadComponent() {
    this.entry.clear();
    if (!this.comment.type) {
      this.comment["type"] = "Message";
    }
    let projectableNode = document.createElement('p');
    projectableNode.innerHTML = this.comment.description;

    const className = this.getComponentName(this.comment.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(description[className]);
    this.componentRef = this.entry.createComponent(componentFactory, this.entry.length, null, [[projectableNode]]);
    (<Comment>this.componentRef.instance).comment = this.comment;
  }  
}