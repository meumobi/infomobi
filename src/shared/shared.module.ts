import { NgModule } from '@angular/core';

import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { MomentModule } from 'ngx-moment';

const sharedModules = [
  MomentModule
];

@NgModule({
  imports: [
    sharedModules
  ],
  declarations: [
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
    sharedModules
  ]
})
export class SharedModule { }