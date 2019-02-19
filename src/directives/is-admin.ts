import { UserProfileService } from '@providers/user-profile';
import { Directive, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

/**
 * Generated class for the IsAdminDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[appIsAdmin]' // Attribute selector
})
export class IsAdminDirective implements OnInit {

  constructor(
    private userProfileService: UserProfileService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    console.log('Hello IsAdminDirective Directive');
  }

  ngOnInit() {

    this.userProfileService.getUserProfileObserver().subscribe(data => {
      if (this.userProfileService.isAdmin()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
