import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
import { CanEditItemDirective } from './can-edit-item';
import { CanPromoteMessageDirective } from './can-promote-message';
@NgModule({
  declarations: [
    HasRoleDirective,
    IsAdminDirective,
    CanEditItemDirective,
    CanPromoteMessageDirective,
  ],
  imports: [],
  exports: [
    HasRoleDirective,
    IsAdminDirective,
    CanEditItemDirective,
    CanPromoteMessageDirective
  ]
})
export class DirectivesModule {}
