import { Platform } from 'ionic-angular';
import { Directive, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIsNative]' // Attribute selector
})
export class IsNativeDirective implements OnInit {

  constructor(
    private platform: Platform,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    console.log('Hello IsNativeDirective Directive');
  }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
