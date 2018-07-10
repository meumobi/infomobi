import { 
  Component, 
  Input, 
  Output, 
  EventEmitter,
  OnInit, 
  ViewChild, 
  ViewContainerRef,
  ComponentFactoryResolver, 
  OnDestroy
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentDescription } from '@models/comment-description.interface';
import { MessageComponent } from '../comment-description';
import * as description from '../comment-description/.'


@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent implements OnInit, OnDestroy  {
  
  @Input('comment') comment;
  @Output() update = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  @Output() open = new EventEmitter(false);
  @Output() promote = new EventEmitter(false);

  @ViewChild('description', { read: ViewContainerRef }) entry: ViewContainerRef;

  rootNavCtrl: NavController;
  descriptionInstance: any;

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
  }

  loadComponent() {

    this.entry.clear();
    //const className = this.comment.type.charAt(0).toUpperCase() + this.comment.type.substr(1) + 'Component';
    //console.log(className);

    //this.descriptionInstance = new description[className](); 
    //console.log('className', this.descriptionInstance);
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);

    const componentRef = this.entry.createComponent(componentFactory);
    componentRef.instance.data = this.comment.data;
    //(<CommentDescription>componentRef.instance).data = this.comment.data;
  }

  openPost() {
    this.open.emit({});
  }

  togglePublished() {
    this.update.emit({
      published: !this.comment.published
    })
  }

  toggleAnswered() {
    this.update.emit({
      answered: !this.comment.answered
    })
  }

  promoteComment() {
    this.promote.emit({});
  }

  deleteComment() {
    this.delete.emit({});
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
