import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSlotsPage } from './add-slots.page';

const routes: Routes = [
  {
    path: '',
    component: AddSlotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSlotsPageRoutingModule {}
