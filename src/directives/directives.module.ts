import { NgModule } from '@angular/core';
import { HasRoleDirective } from './has-role';
import { IsAdminDirective } from './is-admin';
@NgModule({
  declarations: [HasRoleDirective,
    IsAdminDirective],
  imports: [],
  exports: [HasRoleDirective,
    IsAdminDirective]
})
export class DirectivesModule {}
