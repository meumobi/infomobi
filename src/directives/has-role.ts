import { UserProfileService } from '@providers/user-profile';
import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

/**
 * Generated class for the HasRoleDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[appHasRole]' // Attribute selector
})
export class HasRoleDirective implements OnInit {

  @Input() role: string;

  constructor(
    private userProfileService: UserProfileService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    console.log('Hello HasRoleDirective Directive');
  }

  ngOnInit() {

    this.userProfileService.getUserProfileObserver().subscribe(data => {
      if (this.userProfileService.hasRole(this.role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
