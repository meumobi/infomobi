import { ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import * as types from '../types';

@Component({
  selector: 'item-headline',
  templateUrl: 'item-headline.html'
})
export class ItemHeadlineComponent implements OnInit, OnDestroy {
  @Input ('item') item; 
  @ViewChild('target', { read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;
  text: string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
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
    const className = this.getComponentName(this.item.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(types[className]);
    this.componentRef = this.entry.createComponent(componentFactory, this.entry.length, null);
    (this.componentRef.instance).item = this.item;
  }
}
