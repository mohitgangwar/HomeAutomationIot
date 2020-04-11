import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WashroomPage } from './washroom';

@NgModule({
  declarations: [
    WashroomPage,
  ],
  imports: [
    IonicPageModule.forChild(WashroomPage),
  ],
})
export class WashroomPageModule {}
