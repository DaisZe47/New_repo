import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseParkingPage } from './choose-parking.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseParkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseParkingPageRoutingModule {}
