import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseParkingPage } from '../choose-parking/choose-parking.page';
import { HomePage } from '../home/home.page';
import { ParkingsPage } from '../parkings/parkings.page';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage,
    children:[
      {
        path:'home',
        component:HomePage

      },
      {
        path:'parkings',
        component:ParkingsPage

      },
      
      {
        path:'',
        redirectTo:'/student-dashboard/main-menu/home',
        pathMatch:'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
