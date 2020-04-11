import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivingRoomPage } from './living-room';

@NgModule({
  declarations: [
    LivingRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(LivingRoomPage),
  ],
})
export class LivingRoomPageModule {}
