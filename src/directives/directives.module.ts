import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
import { CanEditItemDirective } from './can-edit-item';
@NgModule({
  declarations: [
    HasRoleDirective,
    IsAdminDirective,
    CanEditItemDirective,
  ],
  imports: [],
  exports: [
    HasRoleDirective,
    IsAdminDirective,
    CanEditItemDirective,
  ]
})
export class DirectivesModule {}
