import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
import { IsNativeDirective } from './is-native';
import { CanEditItemDirective } from './can-edit-item';
import { CanPromoteMessageDirective } from './can-promote-message';
@NgModule({
  declarations: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
    CanEditItemDirective,
    CanPromoteMessageDirective,
  ],
  imports: [],
  exports: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
    CanEditItemDirective,
    CanPromoteMessageDirective
  ]
})
export class DirectivesModule {}
