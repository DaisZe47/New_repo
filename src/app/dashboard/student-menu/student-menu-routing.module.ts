import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from '../pages/about/about.page';
import { ChooseParkingPage } from '../pages/choose-parking/choose-parking.page';
import { MainMenuPage } from '../pages/main-menu/main-menu.page';
import { SettingsPage } from '../pages/settings/settings.page';

import { StudentMenuPage } from './student-menu.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMenuPage,
    children:[
      {
       
        path: 'main-menu',
        loadChildren: () => import('../pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
       
      },
      {
       
        path: 'settings',
        component: SettingsPage,
       
      },
      {
       
        path: 'about',
        component: AboutPage,
       
      },
      

      {
        path: '',
        redirectTo: '/student-dashboard/main-menu/home',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuPageRoutingModule {}
