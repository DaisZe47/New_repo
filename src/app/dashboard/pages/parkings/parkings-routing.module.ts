import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingsPage } from './parkings.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingsPageRoutingModule {}
