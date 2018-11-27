import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartoonsPage } from './cartoons';

@NgModule({
  declarations: [
    CartoonsPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoonsPage),
  ],
})
export class CartoonsPageModule {}
