import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MediaListComponent } from '@components/media-list/media-list';
import { MediumDetailsComponent } from '@components/medium-details/medium-details';
import { MediumControlsComponent } from '@components/medium-controls/medium-controls';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        MediaListComponent,
        MediumDetailsComponent,
        MediumControlsComponent,
    ],
    imports: [
        IonicModule,
        SharedModule,
        TranslateModule.forChild(),
    ],
    exports: [
        IonicModule,
        MediaListComponent,
        MediumDetailsComponent,
        MediumControlsComponent,
    ],
    entryComponents: [
        MediaListComponent
    ]
})
export class MediaListModule {}
