import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSlotsPageRoutingModule } from './add-slots-routing.module';

import { AddSlotsPage } from './add-slots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSlotsPageRoutingModule
  ],
  declarations: [AddSlotsPage]
})
export class AddSlotsPageModule {}
