import { Comment } from '@models/comment';
import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { UserProfileService } from '@providers/user-profile';

@Directive({
  selector: '[appCanEditItem]' // Attribute selector
})
export class CanEditItemDirective implements OnInit {

  @Input('appCanEditItem') item: Comment;

  constructor(
    private userProfileService: UserProfileService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    let emailOfOwner: string = null;
    try {
      emailOfOwner = this.item.data.author.email;
    } catch (err) {
      console.log(err);
    }

    this.userProfileService.getUserProfileObserver().subscribe(profile => {
      if (this.userProfileService.hasRole('admin') || (emailOfOwner === profile.email)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
