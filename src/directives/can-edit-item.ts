import { Comment } from '@models/comment';
import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { UserProfileService } from '@providers/user-profile';
import { UserProfile } from '@models/contact-profile';

@Directive({
  selector: '[appCanEditItem]' // Attribute selector
})
export class CanEditItemDirective implements OnInit {

  @Input('appCanEditItem') item: Comment | UserProfile;

  constructor(
    private userProfileService: UserProfileService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    let idOfOwner: string = null;
    let hasAuthor: boolean = null;

    try {
      hasAuthor = this.item['data'] && this.item['data'].author;
      idOfOwner = hasAuthor ? this.item['data'].author._id : this.item._id;
    } catch (err) {
      console.log(err);
    }

    this.userProfileService.getUserProfileObserver().subscribe(profile => {
      if (this.userProfileService.isAdmin() || (idOfOwner === profile._id)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
