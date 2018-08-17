import { NgModule } from '@angular/core';

import { CategoryLabelComponent } from '@components/category-label/category-label';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [
	  CategoryLabelComponent
	],
	imports: [
		IonicModule,
	],
	exports: [
		IonicModule,
		CategoryLabelComponent
	]
})
export class CategoryLabelModule {}