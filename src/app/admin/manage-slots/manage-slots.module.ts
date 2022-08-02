import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSlotsPageRoutingModule } from './manage-slots-routing.module';

import { ManageSlotsPage } from './manage-slots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSlotsPageRoutingModule
  ],
  declarations: [ManageSlotsPage]
})
export class ManageSlotsPageModule {}
