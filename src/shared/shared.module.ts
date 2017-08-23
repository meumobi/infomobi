import { NgModule } from '@angular/core';

import { SearchPipe } from '../pipes';
import { SafeUrlPipe } from '../pipes';

@NgModule({
  imports: [],
  declarations: [
    SearchPipe,
    SafeUrlPipe
  ],
  providers: [],
  exports: [
    SearchPipe,
    SafeUrlPipe
  ]
})
export class SharedModule { }