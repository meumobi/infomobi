import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    TvPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TvPage),
    
  ],
})
export class TvPageModule {}
