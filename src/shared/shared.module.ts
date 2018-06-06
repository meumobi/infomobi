import { NgModule } from '@angular/core';

import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';


@NgModule({
  imports: [],
  declarations: [
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
  ]
})
export class SharedModule { }