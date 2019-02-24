import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { UserProfileService } from '@providers/user-profile';
import { Comment } from '@models/comment';

@Directive({
  selector: '[appCanPromoteMessage]' // Attribute selector
})
export class CanPromoteMessageDirective implements OnInit {

  @Input('appCanPromoteMessage') comment: Comment;

  constructor(
    private userProfileService: UserProfileService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.userProfileService.getUserProfileObserver().subscribe(
      () => {
        if (this.userProfileService.hasRole('admin') && this.comment.channel !== 'live') {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }
}
