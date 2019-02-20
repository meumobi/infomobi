import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
import { IsNativeDirective } from './is-native';
@NgModule({
  declarations: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
  ],
  imports: [],
  exports: [
    HasRoleDirective,
    IsAdminDirective,
    IsNativeDirective,
  ]
})
export class DirectivesModule {}
