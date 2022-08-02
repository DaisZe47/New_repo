import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSlotsPage } from './manage-slots.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSlotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSlotsPageRoutingModule {}
