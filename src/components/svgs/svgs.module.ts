import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SvgBussinessPlanComponent } from './svg-business-plan';
import { SvgCelebrationComponent } from './svg-celebration';
import { SvgOnlineFriendsComponent } from './svg-online-friends';
import { SvgProfilePicComponent } from './svg-profile-pic';
import { SvgMobileLifeComponent } from './svg-mobile-life';

@NgModule({
  declarations: [
    SvgBussinessPlanComponent,
    SvgCelebrationComponent,
    SvgOnlineFriendsComponent,
    SvgProfilePicComponent,
    SvgMobileLifeComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    SvgBussinessPlanComponent,
    SvgCelebrationComponent,
    SvgOnlineFriendsComponent,
    SvgProfilePicComponent,
    SvgMobileLifeComponent,
  ],
})
export class SvgsModule {}
