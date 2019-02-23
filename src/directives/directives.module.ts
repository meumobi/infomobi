import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
import { IsNativeDirective } from './is-native';
import { CanEditItemDirective } from './can-edit-item';
@NgModule({
  declarations: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
    CanEditItemDirective,
  ],
  imports: [],
  exports: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
    CanEditItemDirective,
  ]
})
export class DirectivesModule {}
